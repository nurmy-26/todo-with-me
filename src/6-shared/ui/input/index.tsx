import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import style from './style.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  extraClass?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
  extraClass,
  type = 'text',
  name,
  placeholder,
  value,
  disabled,
  onChange,
  ...rest
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
      {...rest}
    />
  );
});

export default Input;