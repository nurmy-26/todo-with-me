import React from 'react';
import style from './style.module.css';
import cn from 'classnames';

type SelectProps = {
  extraClass?: string;
  name: string;
  value: string;
  options: (string | number)[];
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ extraClass, name, value, options, disabled, onChange }: SelectProps) => {
  return (
    <select
      className={cn(style.select, extraClass)}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
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