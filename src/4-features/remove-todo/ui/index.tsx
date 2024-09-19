import { FormEvent } from 'react';
import Button from '../../../6-shared/ui/button';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';
import { useRemoveTodo } from '../model';


type RemoveTodoBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  itemId: string;
  listId: string;
  disabled?: boolean;
  extraClass?: string;
};

const RemoveTodoBtn = ({ itemId, listId, disabled, extraClass, ...rest }: RemoveTodoBtnProps) => {
  const { removeTodo } = useRemoveTodo();
  const handleRemove = (event: FormEvent, listId: string, itemId: string) => {
    event.preventDefault();
    removeTodo(listId, itemId)
  }

  return (
    <Button
      icon={<TrashIcon />}
      disabled={disabled}
      extraClass={extraClass}
      size={'s'}
      variant={'tertiary'}
      onClick={(event: FormEvent<Element>) => handleRemove(event, listId, itemId)}
      {...rest}
    >
    </Button>
  );
};

export default RemoveTodoBtn;