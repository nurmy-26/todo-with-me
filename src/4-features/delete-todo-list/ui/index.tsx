import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';


type DeleteListBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  extraClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 's' | 'm';
};

const DeleteListBtn = ({ disabled, extraClass, onClick, size = 's', ...rest }: DeleteListBtnProps) => {
  return (
    <Button
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