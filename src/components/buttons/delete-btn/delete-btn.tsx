import cn from 'classnames';
import styles from './delete-btn.module.css';
import { DeleteIcon } from '../../icons/delete-icon';
import { useDeleteReadingMutation } from '../../../redux';


type DeleteBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  listId: string;
};

const DeleteBtn = ({ disabled, extraClass, listId }: DeleteBtnProps) => {
  const [deleteReading] = useDeleteReadingMutation();

  const handleDeleteList = async (id: string) => {
    await deleteReading(id).unwrap();
  }

  return (
    <button className={cn(styles.del_btn, extraClass)} onClick={() => handleDeleteList(listId)} disabled={disabled}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteBtn;