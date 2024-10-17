import { ButtonHTMLAttributes, FormEvent } from 'react';
import Button from '../../../../6-shared/ui/button';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { PlusIcon } from '../../../../6-shared/ui/icons/plus-icon';


type AddTodoBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
  withText?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const AddTodoBtn = ({ disabled, isLoading, extraClass, onClick, withText, variant, ...rest }: AddTodoBtnProps) => {
  return (
    <Button
      aria-label={'Добавить в список'}
      icon={isLoading ? <LoadingIcon /> : <PlusIcon />}
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