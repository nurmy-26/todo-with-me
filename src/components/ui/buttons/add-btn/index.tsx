import cn from 'classnames';
import style from './style.module.css';
import { PlusIcon } from '../../icons/plus-icon';
import { ListIcon } from '../../icons/list-icon';


type AddBtnProps = {
  children: React.ReactNode;
  disabled?: boolean;
  extraClass?: string;
  icon?: 'list' | 'plus';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.FormEvent) => void;
};

const AddBtn = ({ children, disabled, extraClass, icon, type = 'button', onClick }: AddBtnProps) => {
  let iconComponent;
  switch (icon) {
    case 'plus':
      iconComponent = <PlusIcon />;
      break;
    case 'list':
      iconComponent = <ListIcon />;
      break;
    // в будущем можно добавить больше вариантов 
    default:
      iconComponent = null;
  }

  return (
    <button type={type} className={cn(style.add_button, extraClass)} onClick={onClick} disabled={disabled}>
      {icon && iconComponent}

      {children}
    </button>
  );
};

export default AddBtn;