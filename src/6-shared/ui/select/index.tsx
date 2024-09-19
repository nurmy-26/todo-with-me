import { ChangeEvent, forwardRef, SelectHTMLAttributes } from 'react';
import cn from 'classnames';
import style from './style.module.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  extraClass?: string;
  name: string;
  value: string;
  options: (string | number)[];
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>((
  { extraClass, name, value, options, disabled, onChange, ...rest }: SelectProps,
  ref) => {
  return (
    <select
      ref={ref}
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
});

export default Select;