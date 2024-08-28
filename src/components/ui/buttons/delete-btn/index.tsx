import cn from 'classnames';
import style from './style.module.css';
import { DeleteIcon } from '../../icons/delete-icon';


type TodoListDeleteBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  onDelete: any;
};

const TodoListDeleteBtn = ({ disabled, extraClass, onDelete }: TodoListDeleteBtnProps) => {
  return (
    <button className={cn(style.del_btn, extraClass)} onClick={onDelete} disabled={disabled}>
      <DeleteIcon />
    </button>
  );
};

export default TodoListDeleteBtn;