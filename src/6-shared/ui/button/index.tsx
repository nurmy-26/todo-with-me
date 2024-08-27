import cn from 'classnames';
import style from './style.module.css';


type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  extraClass?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.FormEvent) => void;
};

const Button = ({ children, disabled, extraClass, icon, type = 'button', onClick }: ButtonProps) => {

  return (
    <button type={type} className={cn(style.button, extraClass)} onClick={onClick} disabled={disabled}>
      {icon && icon}

      {children}
    </button>
  );
};

export default Button;