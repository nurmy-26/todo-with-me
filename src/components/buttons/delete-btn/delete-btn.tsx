import cn from 'classnames';
import styles from './delete-btn.module.css';
import { DeleteIcon } from '../../icons/delete-icon';
import { MouseEventHandler } from 'react';


type DeleteBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  listId: string;
  // handleDeleteList: MouseEventHandler<HTMLButtonElement>;
  handleDeleteList: (event: React.MouseEvent<HTMLButtonElement>, listId: string) => Promise<void>;
};

const DeleteBtn = ({ disabled, extraClass, handleDeleteList, listId }: DeleteBtnProps) => {

  return (
    <button className={cn(styles.del_btn, extraClass)} onClick={(e) => handleDeleteList(e, listId)} disabled={disabled}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteBtn;