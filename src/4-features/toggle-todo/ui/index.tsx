import { ChangeEvent } from 'react';
import cn from 'classnames';
import { CheckIcon } from '../../../6-shared/ui/icons/check-icon';
import { TItem } from '../../../6-shared/types';
import { useToggleTodo } from '../model';
import style from './style.module.css';
import { PawIcon } from '../../../6-shared/ui/icons/paw-icon';


type ToggleTodoCheckboxProps = {
  item: TItem;
  listId: string;
  type?: 'default' | 'paw';
  extraClass?: string;
};

const ToggleTodoCheckbox = ({ item, listId, type = 'paw', extraClass }: ToggleTodoCheckboxProps) => {
  const { id, title, isDone } = item;
  const { toggleTodo } = useToggleTodo();

  const toggle = (event: ChangeEvent<HTMLInputElement>, listId: string, itemId: string) => {
    event.preventDefault();
    toggleTodo(listId, itemId)
  }

  // пустой чекбокс (дефолтный или в виде лапки)
  const emptyCheckbox = type === 'default' ?
    <CheckIcon fill={'var(--color-text-primary'} />
    :
    <PawIcon className={style.paw} fill={'var(--color-text-primary'} />

  // отмеченный чекбокс
  const coloredCheckbox = type === 'default' ?
    // квадратик чекбокса с цветной галкой внутри
    (
      <div className={style.svg_checkbox}>
        <CheckIcon fill={'var(--color-text-primary'} />
        <CheckIcon className={style.svg_check} type={'check'} fill={'var(--color-accent'} />
      </div>
    )
    :
    // лапка
    <PawIcon className={style.paw} fill={'var(--color-accent'} />

  // иконка отображается в зависимости от статуса isDone
  const checkboxIcon = isDone
    ? coloredCheckbox
    : emptyCheckbox

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