import { FormEvent } from 'react';
import Button from '../../../../6-shared/ui/button';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { ListIcon } from '../../../../6-shared/ui/icons/list-icon';
import { ButtonProps } from '../../../../6-shared/ui/button/type';


type AddTodoBtnProps = ButtonProps & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
  withText?: boolean;
};

// todo - удалить этот ui (будет не нужен, так как уже есть AddTodoForm)
const AddTodoBtn = ({ disabled, isLoading, extraClass, onClick, withText, ...rest }: AddTodoBtnProps) => {
  const text = 'Добавить в список';


  return (
    <Button
      aria-label={text}
      icon={isLoading ? <LoadingIcon /> : <ListIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      title={withText ? '' : text}
      {...rest}
    >
      {withText && text}
    </Button>
  );
};

export default AddTodoBtn;