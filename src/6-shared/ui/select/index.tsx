import { ChangeEvent } from 'react';
import cn from 'classnames';
import style from './style.module.css';

type SelectProps = {
  extraClass?: string;
  name: string;
  value: string;
  options: { id: string; title: string }[];
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
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;