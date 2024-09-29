import Button from '../../../6-shared/ui/button';
import { ListIcon } from '../../../6-shared/ui/icons/list-icon';
import { LoadingIcon } from '../../../6-shared/ui/icons/loading-icon';


type TodoListCreateBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
  withText?: boolean;
};

const TodoListCreateBtn = ({ disabled, isLoading, extraClass, onClick, withText, ...rest }: TodoListCreateBtnProps) => {
  return (
    <Button
      icon={isLoading ? <LoadingIcon /> : <ListIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      title={withText ? '' : 'Создать список'}
      {...rest}
    >
      {withText && 'Создать список'}
    </Button>
  );
};

export default TodoListCreateBtn;