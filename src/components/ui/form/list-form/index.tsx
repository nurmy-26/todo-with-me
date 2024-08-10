import { v4 as uuidv4 } from 'uuid';
import { useForm } from "../../../../hooks/useForm";
import { useAddReadingMutation } from "../../../../redux";
import { initialListForm } from "../../../../utils/constants";
import AddBtn from "../../buttons/add-btn";
import Form from "..";
import Input from "../../input";

const ListForm = () => {
  const { values: listValues, setValues: setListValues, handleChange: handleListChange } = useForm(initialListForm);
  const [addReading, { isLoading }] = useAddReadingMutation();

  const handleCreateList = async (event: React.FormEvent) => {
    event.preventDefault();

    if (listValues) {
      // unwrap для обработки ошибок и тп
      await addReading({ id: uuidv4(), title: listValues['list-name'], items: [] }).unwrap();
      setListValues(initialListForm); // очищаем поле ввода
    }
  };

  return (
    <Form onSubmit={handleCreateList}>
      <Input
        name='list-name'
        placeholder="Придумайте название списка..."
        value={listValues['list-name']}
        disabled={isLoading}
        onChange={handleListChange}
      />
      <AddBtn type="submit" icon='list' disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Создать список'}</AddBtn>
    </Form>
  )
}

export default ListForm;