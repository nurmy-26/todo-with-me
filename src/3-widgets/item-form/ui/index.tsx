import { FormEvent } from "react";
import { AddTodoBtn, useAddTodo, useSelectTodoListTitle } from "../../../4-features";
import useEscape from "../../../6-shared/lib/hooks/useEscape";
import { useForm } from "../../../6-shared/lib/hooks/useForm";
import { useInputRef } from "../../../6-shared/lib/hooks/useInputRef";
import Form from "../../../6-shared/ui/form";
import Input from "../../../6-shared/ui/input";
import Select from "../../../6-shared/ui/select";

const ItemForm = () => {
  const initialItemForm = {
    "list-item-title": "",
  };

  const {
    values,
    handleChange,
    clearForm
  } = useForm(initialItemForm);
  const { inputRef: titleRef, deactivateInput: deactivateTitleInput } = useInputRef();
  const { addTodo, isLoading } = useAddTodo();

  const { selectedValue, valueList, handleSelect } = useSelectTodoListTitle();

  const handleAddToList = async (event: FormEvent) => {
    event.preventDefault();

    addTodo(selectedValue, values['list-item-title'])
    clearForm();
  };

  // что делать по нажатию на Esc
  const handleEsc = () => {
    deactivateTitleInput(); // убрать фокус с input
    clearForm(); // очистить форму
  };

  useEscape(handleEsc, values['list-item-title'] !== ''); // вешаем обработчик Esc на input, если есть что удалять

  const isLocked = isLoading || values['list-item-title'] === '';

  return (
    <Form onSubmit={handleAddToList} title={'Добавление в список'}>
      <Select
        aria-label={'Выбрать список для добавления элементов'}
        name='list-name'
        value={selectedValue}
        options={valueList}
        disabled={isLoading}
        onChange={handleSelect}
      />

      <Input
        ref={titleRef}
        name='list-item-title'
        placeholder="Что вы хотите добавить в список?.."
        value={values['list-item-title']}
        disabled={isLoading}
        onChange={handleChange}
      />

      <AddTodoBtn withText type='submit' disabled={isLocked} />
    </Form>
  )
}

export default ItemForm;