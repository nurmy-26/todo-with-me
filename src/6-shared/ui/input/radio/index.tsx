import { ChangeEvent, ReactNode } from 'react';
import cn from 'classnames';
import { RadioIcon } from '../../icons/radio-icon';
import style from './style.module.css';


type RadioProps = {
  title?: string;
  name: string;
  label?: ReactNode;
  value: string;
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  extraClass?: string;
};

const Radio = ({ title, name, label, value, isChecked, handleChange, extraClass, }: RadioProps) => {
  // иконка отображается в зависимости от статуса isDone
  const radioIcon = isChecked
    ? <RadioIcon fill={"var(--color-accent)"} type={'fullfilled'} />
    : <RadioIcon type={'empty'} />

  return (
    <label title={title} className={cn(style.label, extraClass)} onClick={(e) => e.stopPropagation()}>
      <input
        aria-label={(isChecked ? 'Убрать' : 'Поставить') + 'галочку'}
        className={style.radio}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />

      {radioIcon}

      {label && label}
    </label>
  );
};

export default Radio;