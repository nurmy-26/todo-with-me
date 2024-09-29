import { FormEvent } from 'react';
import { TodoListCreateBtn, useCreateTodoList } from '../../../4-features';
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

  const handleCreateList = async (event: FormEvent) => {
    event.preventDefault();

    createTodoList(values['list-name']);
    clearForm(); // очищаем поле ввода
  };

  // что делать по нажатию на Esc
  const handleEsc = () => {
    deactivateListTitleInput(); // убрать фокус с input
    clearForm(); // очистить форму
  };

  useEscape(handleEsc, values['list-name'] !== ''); // вешаем обработчик Esc на input, если есть, что удалять

  const isLocked = isLoading || values['list-name'] === '';

  return (
    <Form onSubmit={handleCreateList} title={'Создание нового списка'}>
      <Input
        name='list-name'
        placeholder="Придумайте название списка..."
        value={values['list-name']}
        disabled={isLoading}
        onChange={handleChange}
        ref={listTitleRef}
      />

      <TodoListCreateBtn withText type="submit" disabled={isLocked} />
    </Form>
  )
}

export default ListForm;