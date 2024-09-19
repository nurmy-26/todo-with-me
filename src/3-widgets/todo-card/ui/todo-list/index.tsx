import cn from 'classnames';
import { RemoveTodoBtn, ToggleTodoCheckbox } from '../../../../4-features';
import { TodoItem } from '../../../../5-entities';
import { TItem, TList } from '../../../../6-shared/types';
import style from './style.module.css';


type TodoListProps = {
  list: TList;
  extraClass?: string;
};

const TodoList = ({
  list,
  extraClass,
}: TodoListProps) => {
  return (
    <ul className={cn(style.list, extraClass)}>
      {list.items.map((item: TItem, index: number) =>
        <li key={index} className={style.item}>
          <ToggleTodoCheckbox item={item} listId={list.id} />

          <TodoItem item={item} />

          <RemoveTodoBtn itemId={item.id} listId={list.id} extraClass={style.del_btn} />
        </li>
      )}
    </ul>
  )
};

export default TodoList;