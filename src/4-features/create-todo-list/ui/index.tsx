import Button from '../../../6-shared/ui/button';
import { ListIcon } from '../../../6-shared/ui/icons/list-icon';


type TodoListCreateBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: (event: React.FormEvent) => void;
};

const TodoListCreateBtn = ({ disabled, extraClass, type = 'button', onClick }: TodoListCreateBtnProps) => {
  return (
    <Button
      icon={<ListIcon />}
      disabled={disabled}
      extraClass={extraClass}
      type={type}
      onClick={onClick}
    >
      Создать список
    </Button>
  );
};

export default TodoListCreateBtn;