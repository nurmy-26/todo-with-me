import { useAddTodo } from "../../../4-features/add-todo/model";
import TodoAddBtn from "../../../4-features/add-todo/ui";
import { useSelectTodoListTitle } from "../../../4-features/select-todo-list/model";
import useEscape from "../../../6-shared/lib/useEscape";
import { useForm } from "../../../6-shared/lib/useForm";
import { useInputRef } from "../../../6-shared/lib/useInputRef";
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

  const handleAddToList = async (event: React.FormEvent) => {
    event.preventDefault();

    addTodo(selectedValue, values['list-item-title'])
    clearForm();
  };

  const handleEsc = () => { // по нажатию на Esc
    deactivateTitleInput(); // убрать фокус с input
    clearForm(); // очистить форму
  };

  useEscape(handleEsc); // вешаем обработчик Esc на input

  const isLocked = isLoading || values['list-item-title'] === '';

  return (
    <Form onSubmit={handleAddToList}>
      <Select
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

      <TodoAddBtn type='submit' disabled={isLocked} />
    </Form>
  )
}

export default ItemForm;