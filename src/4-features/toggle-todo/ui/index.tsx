import { ChangeEvent } from 'react';
import { TItem } from '../../../6-shared/types';
import Checkbox from '../../../6-shared/ui/input/checkbox';
import { LoadingIcon } from '../../../6-shared/ui/icons/loading-icon';
import { useToggleTodo } from '../model';


type ToggleTodoCheckboxProps = {
  item: TItem;
  listId: string;
  type?: 'default' | 'paw';
  extraClass?: string;
};

const ToggleTodoCheckbox = ({ item, listId, type = 'paw', extraClass }: ToggleTodoCheckboxProps) => {
  const { id, title, isDone } = item;
  const { toggleTodo, isLoading } = useToggleTodo();

  const toggle = (event: ChangeEvent<HTMLInputElement>, listId: string, itemId: string) => {
    event.preventDefault();
    toggleTodo(listId, itemId)
  }

  // todo - добавить сюда назначение type из Settings

  return (
    isLoading ? <LoadingIcon /> :
      <Checkbox
        extraClass={extraClass}
        type={type}
        name={id}
        value={title}
        isChecked={isDone}
        handleChange={(event: ChangeEvent<HTMLInputElement>) => toggle(event, listId, id)}
      />
  );
};

export default ToggleTodoCheckbox;