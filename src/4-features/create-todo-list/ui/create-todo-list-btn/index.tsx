import { FormEvent } from 'react';
import Button from '../../../../6-shared/ui/button';
import { PlusIcon } from '../../../../6-shared/ui/icons/plus-icon';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { ButtonProps } from '../../../../6-shared/ui/button/type';


type CreateTodoListBtnProps = ButtonProps & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
  withText?: boolean;
};

const CreateTodoListBtn = ({ disabled, isLoading, extraClass, onClick, withText, ...rest }: CreateTodoListBtnProps) => {
  const text = 'Создать список';


  return (
    <Button
      aria-label={text}
      icon={isLoading ? <LoadingIcon /> : <PlusIcon />}
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

export default CreateTodoListBtn;