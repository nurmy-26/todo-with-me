import { ButtonHTMLAttributes, MouseEvent } from 'react';
import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';


type DeleteListBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  extraClass?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 's' | 'm';
};

const DeleteListBtn = ({ disabled, extraClass, onClick, size = 'xs', ...rest }: DeleteListBtnProps) => {
  return (
    <Button
      aria-label={'Удалить список'}
      icon={<TrashIcon />}
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