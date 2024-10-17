import { ButtonHTMLAttributes, FormEvent } from 'react';
import Button from '../../../6-shared/ui/button';
import { ListIcon } from '../../../6-shared/ui/icons/list-icon';
import { LoadingIcon } from '../../../6-shared/ui/icons/loading-icon';


type TodoListCreateBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
  withText?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const TodoListCreateBtn = ({ disabled, isLoading, extraClass, onClick, withText, variant, ...rest }: TodoListCreateBtnProps) => {
  return (
    <Button
      aria-label={'Создать список'}
      icon={isLoading ? <LoadingIcon /> : <ListIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      title={withText ? '' : 'Создать список'}
      variant={variant}
      {...rest}
    >
      {withText && 'Создать список'}
    </Button>
  );
};

export default TodoListCreateBtn;