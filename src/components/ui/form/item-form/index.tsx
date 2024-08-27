import { v4 as uuidv4 } from 'uuid';
import { useForm } from "../../../../hooks/useForm";
import { useGetTodoListsQuery, useUpdateTodoListMutation } from "../../../../redux";
import { initialItemForm } from "../../../../utils/constants";
import AddBtn from "../../buttons/add-btn";
import Form from "..";
import Input from "../../input";
import Select from '../../select';
import CollapsibleTags from '../../../collapsible-section/collapsible-tags/collapsible-tags';
import { useSelect } from '../../../../hooks/useSelect';
import { TItem } from '../../../../6-shared/types';

const ItemForm = () => {
  // todo - вместо пустого массива - сделать дефолтную константу
  const { data = [] } = useGetTodoListsQuery(); // get-запрос к "серверу" за данными "todolist"
  const { values: itemValues, setValues: setItemValues, handleChange: handleItemChange } = useForm(initialItemForm);
  const { selectedValue, valueList, handleSelect } = useSelect<TList>(data, "title");
  const [updateTodoList, { isLoading }] = useUpdateTodoListMutation();

  const handleAddToList = async (event: React.FormEvent) => {
    event.preventDefault();

    // подготавливаем данные
    const listItem: TItem = {
      id: uuidv4(),
      title: itemValues['list-item-title'],
    }
    const selectedList = data.find((item: TItem) => item.title === selectedValue);
    const listId = selectedList.id;
    const updatedList = {
      ...selectedList,
      items: [
        ...selectedList.items,
        listItem
      ]
    };

    // обновляем список, добавляя в него новое значение
    await updateTodoList({ listId, ...updatedList }).unwrap();
    setItemValues(initialItemForm);
  };

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
        name='list-item-title'
        placeholder="Что вы хотите добавить в список?.."
        value={itemValues['list-item-title']}
        disabled={isLoading}
        onChange={handleItemChange}
      />
      <CollapsibleTags />
      <AddBtn type='submit' icon='plus' disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Добавить в список'}</AddBtn>
    </Form>
  )
}

export default ItemForm;