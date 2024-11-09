import { MouseEvent } from 'react';
import Button from '../../../../6-shared/ui/button';
import { PlusIcon } from '../../../../6-shared/ui/icons/plus-icon';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { ButtonProps } from '../../../../6-shared/ui/button/type';


type CreateTodoListBtnProps = ButtonProps & {
  isActive?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  withText?: boolean;
};

const CreateTodoListBtn = ({ isActive, disabled, isLoading, extraClass, onClick, withText, ...rest }: CreateTodoListBtnProps) => {
  const text = 'Создать список';


  return (
    <Button
      aria-label={text}
      icon={isLoading ? <LoadingIcon /> : <PlusIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      // подсказка при наведении нужна только если у кнопки svg без текста
      title={withText ? '' : (isActive ? 'Скрыть форму добавления списка' : 'Показать форму добавления списка')}
      {...rest}
    >
      {withText && text}
    </Button>
  );
};

export default CreateTodoListBtn;