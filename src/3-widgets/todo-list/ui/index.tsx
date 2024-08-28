import cn from 'classnames';
import style from './style.module.css';
import TodoItem from '../../../5-entities/Todo/ui/todo-item';
import { TItem, TList } from '../../../5-entities/Todo/model/types';
import TodoToggleCheckbox from '../../../4-features/toggle-todo/ui';
import TodoRemoveBtn from '../../../4-features/remove-todo/ui';
import { useToggleTodo } from '../../../4-features/toggle-todo/model';
import { useRemoveTodo } from '../../../4-features/remove-todo/model';


type TodoListProps = {
  list: TList;
  extraClass?: string;
};

const TodoList = ({
  list,
  extraClass,
}: TodoListProps) => {
  const { toggleTodo } = useToggleTodo();
  const { removeTodo } = useRemoveTodo();

  return (
    <ul className={cn(style.list, extraClass)}>
      {list.items.map((item: TItem, index: number) =>
        <li key={index} className={style.item}>
          <TodoToggleCheckbox item={item} onChange={() => toggleTodo(list.id, item.id)} />

          <TodoItem item={item} />

          <TodoRemoveBtn onClick={() => removeTodo(list.id, item.id)} extraClass={style.del_btn} />
        </li>
      )}
    </ul>
  )
};

export default TodoList;