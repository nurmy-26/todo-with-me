import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';


type RemoveTodoBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.FormEvent) => void;
};

const RemoveTodoBtn = ({ disabled, extraClass, type = 'button', onClick }: RemoveTodoBtnProps) => {
  return (
    <Button
      icon={<TrashIcon />}
      disabled={disabled}
      extraClass={extraClass}
      type={type}
      onClick={onClick}
    >
    </Button>
  );
};

export default RemoveTodoBtn;