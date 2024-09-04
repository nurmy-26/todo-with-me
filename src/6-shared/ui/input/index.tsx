import React from 'react';
import style from './style.module.css';
import cn from 'classnames';

type InputProps = {
  extraClass?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  extraClass,
  type = 'text',
  name,
  placeholder,
  value,
  disabled,
  onChange
}: InputProps,
  ref
) => {
  return (
    <input
      className={cn(style.input, extraClass)}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default Input;