import { ButtonHTMLAttributes, FormEvent } from 'react';
import cn from 'classnames';
import Button from '../../../6-shared/ui/button';
import { LoadingIcon } from '../../../6-shared/ui/icons/loading-icon';
import { TrashIcon } from '../../../6-shared/ui/icons/trash-icon';
import { useRemoveTodo } from '../model';
import style from './style.module.css';


type RemoveTodoBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  itemId: string;
  listId: string;
  disabled?: boolean;
  extraClass?: string;
};

const RemoveTodoBtn = ({ itemId, listId, disabled, extraClass, ...rest }: RemoveTodoBtnProps) => {
  const { removeTodo, isLoading } = useRemoveTodo();
  const handleRemove = (event: FormEvent, listId: string, itemId: string) => {
    event.preventDefault();
    removeTodo(listId, itemId)
  }

  return (
    <Button
      aria-label={'Удалить элемент списка'}
      icon={isLoading ? <LoadingIcon /> : <TrashIcon />}
      disabled={disabled}
      extraClass={cn(style.remove_btn, extraClass)}
      size={'xs'}
      variant={'tertiary'}
      onClick={(event: FormEvent<Element>) => handleRemove(event, listId, itemId)}
      {...rest}
    >
    </Button>
  );
};

export default RemoveTodoBtn;