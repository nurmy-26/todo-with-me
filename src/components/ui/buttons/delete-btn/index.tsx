import cn from 'classnames';
import style from './style.module.css';
import { DeleteIcon } from '../../icons/delete-icon';


type DeleteBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  onDelete: any;
};

const DeleteBtn = ({ disabled, extraClass, onDelete }: DeleteBtnProps) => {
  return (
    <button className={cn(style.del_btn, extraClass)} onClick={onDelete} disabled={disabled}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteBtn;