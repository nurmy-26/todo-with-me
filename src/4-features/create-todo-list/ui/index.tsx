import Button from '../../../6-shared/ui/button';
import { ListIcon } from '../../../6-shared/ui/icons/list-icon';


type TodoListCreateBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
};

const TodoListCreateBtn = ({ disabled, isLoading, extraClass, onClick, ...rest }: TodoListCreateBtnProps) => {
  return (
    <Button
      icon={<ListIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? 'Загрузка...' : 'Создать список'}
    </Button>
  );
};

export default TodoListCreateBtn;