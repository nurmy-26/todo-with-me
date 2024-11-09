import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import style from './style.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  extraClass?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  shape?: "default" | "rounded" | "line";
  name: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
  extraClass,
  type = 'text',
  shape = "default",
  name,
  placeholder,
  value,
  disabled,
  onChange,
  error,
  ...rest
}: InputProps,
  ref
) => {
  return (
    <label className={cn(style.label, extraClass)}>
      <input
        className={cn(style.input, style[shape])}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
      <span className={style.error}>{error && error}</span>
    </label>
  );
});

export default Input;