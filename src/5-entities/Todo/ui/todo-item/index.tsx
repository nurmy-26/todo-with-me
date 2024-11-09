import cn from 'classnames';
import Typography from '../../../../6-shared/ui/typography';
import { TItem } from '../../../../6-shared/types';
import style from './style.module.css';


type TodoItemProps = {
  item: TItem;
  extraClass?: string;
};

const TodoItem = ({ item, extraClass }: TodoItemProps) => {
  // todo - при расширении todo-item тут будет больше свойств
  const { title, isDone } = item;

  return (
    <div className={cn(style.todo, extraClass)}>
      {/* todo - при расширении todo-item - тут может добавиться больше строк */}
      <Typography extraClass={isDone ? style.done_crossed : ''}>{title}</Typography>
    </div>
  )
};

export default TodoItem;