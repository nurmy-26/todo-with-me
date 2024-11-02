import { ButtonHTMLAttributes, FormEvent } from 'react';
import Button from '../../../../6-shared/ui/button';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { ListIcon } from '../../../../6-shared/ui/icons/list-icon';


type AddTodoBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
  withText?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

// todo - удалить этот ui (будет не нужен, так как уже есть AddTodoForm)
const AddTodoBtn = ({ disabled, isLoading, extraClass, onClick, withText, variant, ...rest }: AddTodoBtnProps) => {
  return (
    <Button
      aria-label={'Добавить в список'}
      icon={isLoading ? <LoadingIcon /> : <ListIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      title={withText ? '' : 'Добавить в список'}
      variant={variant}
      {...rest}
    >
      {withText && 'Добавить в список'}
    </Button>
  );
};

export default AddTodoBtn;