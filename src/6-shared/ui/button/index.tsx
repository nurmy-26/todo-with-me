import cn from 'classnames';
import style from './style.module.css';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  disabled?: boolean;
  extraClass?: string;
  icon?: React.ReactNode;
  size?: 's' | 'm';
  shape?: 'default_shape' | 'rounded';
  variant?: 'primary' | 'secondary' | 'tertiary';
  isInline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  disabled,
  extraClass,
  icon,
  type = 'button',
  size = 'm',
  shape = 'default_shape',
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