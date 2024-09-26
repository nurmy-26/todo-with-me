import { ChangeEvent } from 'react';
import cn from 'classnames';
import { CheckIcon } from '../../../6-shared/ui/icons/check-icon';
import { TItem } from '../../../6-shared/types';
import { useToggleTodo } from '../model';
import style from './style.module.css';


type ToggleTodoCheckboxProps = {
  item: TItem;
  listId: string;
  extraClass?: string;
};

const ToggleTodoCheckbox = ({ item, listId, extraClass }: ToggleTodoCheckboxProps) => {
  const { id, title, isDone } = item;
  const { toggleTodo } = useToggleTodo();

  const toggle = (event: ChangeEvent<HTMLInputElement>, listId: string, itemId: string) => {
    event.preventDefault();
    toggleTodo(listId, itemId)
  }

  const checkboxIcon = isDone
    ? <CheckIcon type={'white-rectangle'} fill={'var(--color-accent'} />
    : <CheckIcon />

  return (
    <label className={cn(style.label, extraClass)} onClick={(e) => e.stopPropagation()}>
      <input
        className={style.checkbox}
        type="checkbox"
        name={id}
        value={title}
        checked={isDone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => toggle(event, listId, id)}
      />

      {checkboxIcon}
    </label>
  );
};

export default ToggleTodoCheckbox;