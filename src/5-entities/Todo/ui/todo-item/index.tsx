import cn from 'classnames';
import { TItem } from '../../../../6-shared/types';
import style from './style.module.css';


type TodoItemProps = {
  item: TItem;
  extraClass?: string;
};

const TodoItem = ({ item, extraClass }: TodoItemProps) => {
  // todo - при расширении todo-item тут будет больше свойств
  const { title } = item;

  return (
    <div className={cn(style.todo, extraClass)}>
      {/* todo - при расширении todo-item - тут может добавиться больше строк */}
      <p>{title}</p>
    </div>
  )
};

export default TodoItem;