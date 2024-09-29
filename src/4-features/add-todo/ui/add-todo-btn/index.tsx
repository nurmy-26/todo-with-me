import Button from '../../../../6-shared/ui/button';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { PlusIcon } from '../../../../6-shared/ui/icons/plus-icon';


type AddTodoBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
  withText?: boolean;
};

const AddTodoBtn = ({ disabled, isLoading, extraClass, onClick, withText, ...rest }: AddTodoBtnProps) => {
  return (
    <Button
      icon={isLoading ? <LoadingIcon /> : <PlusIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      title={withText ? '' : 'Добавить в список'}
      {...rest}
    >
      {withText && 'Добавить в список'}
    </Button>
  );
};

export default AddTodoBtn;