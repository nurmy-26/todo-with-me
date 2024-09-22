import { ChangeEvent } from 'react';
import cn from 'classnames';
import style from './style.module.css';

type SelectProps = {
  extraClass?: string;
  name: string;
  value: string;
  options: (string | number)[];
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = (
  { extraClass, name, value, options, disabled, onChange, ...rest }: SelectProps) => {
  return (
    <select
      className={cn(style.select, extraClass)}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      {...rest}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;