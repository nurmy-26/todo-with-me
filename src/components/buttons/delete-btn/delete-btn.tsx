import cn from 'classnames';
import styles from './delete-btn.module.css';
import { DeleteIcon } from '../../icons/delete-icon';
import { MouseEventHandler } from 'react';


type DeleteBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  handleDeleteList?: MouseEventHandler<HTMLButtonElement>;
};

const DeleteBtn = ({ disabled, extraClass, handleDeleteList }: DeleteBtnProps) => {

  return (
    <button className={cn(styles.del_btn, extraClass)} onClick={handleDeleteList} disabled={disabled}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteBtn;