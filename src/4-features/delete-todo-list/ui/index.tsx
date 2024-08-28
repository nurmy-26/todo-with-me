import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';


type DeleteListBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: (event: React.FormEvent) => void;
  size?: 's' | 'm';
};

const DeleteListBtn = ({ disabled, extraClass, type = 'button', onClick, size = 's' }: DeleteListBtnProps) => {
  return (
    <Button
      icon={<TrashIcon />}
      disabled={disabled}
      extraClass={extraClass}
      type={type}
      onClick={onClick}
    >
      {size === 'm' ? 'Удалить список' : null}
    </Button>
  );
};

export default DeleteListBtn;