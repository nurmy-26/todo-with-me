import { MouseEvent } from 'react';
import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';
import { LoadingIcon } from '../../../6-shared/ui/icons/loading-icon';
import { ButtonProps } from '../../../6-shared/ui/button/type';


type DeleteListBtnProps = ButtonProps & {
  isLoading?: boolean;
  disabled?: boolean;
  extraClass?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 's' | 'm';
};

const DeleteListBtn = ({ isLoading, disabled, extraClass, onClick, size = 'xs', ...rest }: DeleteListBtnProps) => {
  return (
    <Button
      aria-label={'Удалить список'}
      icon={isLoading ? <LoadingIcon /> : <TrashIcon />}
      disabled={disabled}
      extraClass={extraClass}
      size={size}
      variant={'tertiary'}
      onClick={onClick}
      {...rest}
    >
      {size === 'm' ? 'Удалить список' : null}
    </Button>
  );
};

export default DeleteListBtn;