import cn from 'classnames';
import styles from './add-btn.module.css';
import { PlusIcon } from '../../icons/plus-icon';
import { ListIcon } from '../../icons/list-icon';


type AddBtnProps = {
  children: React.ReactNode;
  extraClass?: string;
  icon?: 'list' | 'plus';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.FormEvent) => void;
};

const AddBtn = ({ children, extraClass, icon, type = 'button', onClick }: AddBtnProps) => {
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
    <button type={type} className={cn(styles.add_button, extraClass)} onClick={onClick}>
      {icon && iconComponent}

      {children}
    </button>
  );
};

export default AddBtn;