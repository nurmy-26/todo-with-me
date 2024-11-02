import { ChangeEvent, ReactNode } from 'react';
import cn from 'classnames';
import { CheckIcon } from '../../icons/check-icon';
import { PawIcon } from '../../icons/paw-icon';
import style from './style.module.css';


type CheckboxProps = {
  title?: string;
  name: string;
  label?: ReactNode;
  value: string;
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: 'default' | 'paw';
  extraClass?: string;
};

const Checkbox = ({ title, name, label, value, isChecked, handleChange, type = 'paw', extraClass }: CheckboxProps) => {
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

  // иконка отображается в зависимости от статуса todo-листа isDone
  const checkboxIcon = isChecked
    ? coloredCheckbox
    : emptyCheckbox

  return (
    <label title={title} className={cn(style.label, extraClass)} onClick={(e) => e.stopPropagation()}>
      <input
        aria-label={(isChecked ? 'Убрать' : 'Поставить') + 'галочку'}
        className={style.checkbox}
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />

      {checkboxIcon}

      {label && label}
    </label>
  );
};

export default Checkbox;