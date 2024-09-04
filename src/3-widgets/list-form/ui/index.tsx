import { useCreateTodoList } from '../../../4-features/create-todo-list/model';
import TodoListCreateBtn from '../../../4-features/create-todo-list/ui';
import useEscape from '../../../6-shared/lib/useEscape';
import { useForm } from '../../../6-shared/lib/useForm';
import { useInputRef } from '../../../6-shared/lib/useInputRef';
import Form from '../../../6-shared/ui/form';
import Input from '../../../6-shared/ui/input';

const ListForm = () => {
  const initialListForm = {
    "list-name": "",
  };

  const {
    values,
    handleChange,
    clearForm
  } = useForm(initialListForm);
  const { inputRef: listTitleRef, deactivateInput: deactivateListTitleInput } = useInputRef();
  const { createTodoList, isLoading } = useCreateTodoList();

  const handleCreateList = async (event: React.FormEvent) => {
    event.preventDefault();

    createTodoList(values['list-name']);
    clearForm(); // очищаем поле ввода
  };

  const handleEsc = () => { // по нажатию на Esc
    deactivateListTitleInput(); // убрать фокус с input
    clearForm(); // очистить форму
  };

  useEscape(handleEsc); // вешаем обработчик Esc на input

  const isLocked = isLoading || values['list-name'] === '';

  return (
    <Form onSubmit={handleCreateList}>
      <Input
        name='list-name'
        placeholder="Придумайте название списка..."
        value={values['list-name']}
        disabled={isLoading}
        onChange={handleChange}
        ref={listTitleRef}
      />

      <TodoListCreateBtn type="submit" disabled={isLocked} />
    </Form>
  )
}

export default ListForm;