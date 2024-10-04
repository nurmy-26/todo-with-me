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

  // квадратик чекбокса с цветной галкой внутри
  const coloredCheckbox = (
    <div className={style.svg_checkbox}>
      <CheckIcon fill={'var(--color-text-primary'} />
      <CheckIcon className={style.svg_check} type={'check'} fill={'var(--color-accent'} />
    </div>
  )

  const checkboxIcon = isDone
    ? coloredCheckbox
    : <CheckIcon fill={'var(--color-text-primary'} />

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