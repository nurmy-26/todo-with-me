import { FormEvent } from 'react';
import Button from '../../../6-shared/ui/button';
import { LoadingIcon } from '../../../6-shared/ui/icons/loading-icon';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';
import { ButtonProps } from '../../../6-shared/ui/button/type';


type DeleteAllTodoListsBtnProps = ButtonProps & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
  withText?: boolean;
};

const DeleteAllTodoListsBtn = ({
  disabled, isLoading, extraClass, withText, onClick, ...rest
}: DeleteAllTodoListsBtnProps) => {
  const text = 'Удалить все списки';


  return (
    <Button
      aria-label={text}
      icon={isLoading ? <LoadingIcon /> : <TrashIcon type={'fullfilled'} />}
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

export default DeleteAllTodoListsBtn;