import Button from '../../../6-shared/ui/button';
import { PlusIcon } from '../../../6-shared/ui/icons/plus-icon';


type AddTodoBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
};

const AddTodoBtn = ({ disabled, isLoading, extraClass, onClick, ...rest }: AddTodoBtnProps) => {
  return (
    <Button
      icon={<PlusIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? 'Загрузка...' : 'Добавить в список'}
    </Button>
  );
};

export default AddTodoBtn;