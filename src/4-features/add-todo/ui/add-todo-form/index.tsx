import ExpandableForm from '../../../../6-shared/ui/expandable-form';
import { useAddTodo } from '../../model';


type AddTodoFormProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  extraClass?: string;
  listTitle: string; // имя списка чтобы знать, куда добавлять Todo
};

const AddTodoForm = ({ disabled, extraClass, listTitle }: AddTodoFormProps) => {
  const { addTodo, isLoading } = useAddTodo();
  const submitCallback = async (value: string) => {
    await addTodo(listTitle, value);
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