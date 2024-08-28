import Button from '../../../6-shared/ui/button';
import { PlusIcon } from '../../../6-shared/ui/icons/plus-icon';


type TodoAddBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: (event: React.FormEvent) => void;
};

const TodoAddBtn = ({ disabled, extraClass, type = 'button', onClick }: TodoAddBtnProps) => {
  return (
    <Button
      icon={<PlusIcon />}
      disabled={disabled}
      extraClass={extraClass}
      type={type}
      onClick={onClick}
    >
      Добавить в список
    </Button>
  );
};

export default TodoAddBtn;