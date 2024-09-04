import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';


type TodoRemoveBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  extraClass?: string;
  onClick: (event: React.FormEvent) => void;
};

const TodoRemoveBtn = ({ disabled, extraClass, onClick, ...rest }: TodoRemoveBtnProps) => {
  return (
    <Button
      icon={<TrashIcon />}
      disabled={disabled}
      extraClass={extraClass}
      size={'s'}
      variant={'tertiary'}
      onClick={onClick}
      {...rest}
    >
    </Button>
  );
};

export default TodoRemoveBtn;