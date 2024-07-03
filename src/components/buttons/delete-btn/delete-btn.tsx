import cn from 'classnames';
import styles from './delete-btn.module.css';
import { DeleteIcon } from '../../icons/delete-icon';


type DeleteBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  onDelete?: (event: React.FormEvent) => void;
};

const DeleteBtn = ({ disabled, extraClass, onDelete }: DeleteBtnProps) => {

  return (
    <button className={cn(styles.del_btn, extraClass)} onClick={onDelete} disabled={disabled}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteBtn;