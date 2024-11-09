import cn from 'classnames';
import { ButtonProps } from './type';
import style from './style.module.css';


const Button = ({
  children,
  disabled,
  extraClass,
  icon,
  type = 'button',
  size = 'm',
  shape = 'default',
  variant = 'secondary',
  isInline,
  onClick,
  ...rest
}: ButtonProps) => {

  return (
    <button
      type={type}
      className={cn(
        style.button,
        style[size],
        style[shape],
        style[variant],
        isInline && style.inline,
        extraClass
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && icon}

      {children}
    </button>
  );
};

export default Button;