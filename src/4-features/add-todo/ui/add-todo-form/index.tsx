import { ButtonHTMLAttributes } from 'react';
import ExpandableForm from '../../../../6-shared/ui/expandable-form';
import { useAddTodo } from '../../model';


type AddTodoFormProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  extraClass?: string;
  listId: string; // id списка чтобы знать, куда добавлять Todo
};

const AddTodoForm = ({ disabled, extraClass, listId }: AddTodoFormProps) => {
  const { addTodo, isLoading } = useAddTodo();
  const submitCallback = async (value: string) => {
    await addTodo(listId, value);
  }


  return (
    <ExpandableForm
      name={'list-item-title'}
      placeholder={'Добавить в список...'}
      submitCallback={submitCallback}
      disabled={disabled || isLoading}
      extraClass={extraClass}
      btnVariant={'tertiary'}
    />
  );
};

export default AddTodoForm;