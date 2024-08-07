import { useDeleteReadingMutation, useGetReadingsQuery, useUpdateReadingMutation } from "../../redux";
import BaseList from '../base-list';
import { TItem, TList } from '../../utils/mock-data';
import TodoListCard from "../todo-list-card";

const ListOfTodoLists = () => {
  const { data = [], isLoading } = useGetReadingsQuery(); // get-запрос к "серверу" за данными "reading"
  const [updateReading] = useUpdateReadingMutation();
  const [deleteReading] = useDeleteReadingMutation();

  const handleDeleteList = async (event: React.FormEvent, id: string) => {
    await deleteReading(id).unwrap();
  }

  const handleDeleteItem = async (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listId: string) => {
    event.preventDefault();

    const listIndex = data.findIndex((list: TList) => list.id === listId);
    const updatedItems = data[listIndex].items.filter(
      (item: TItem) => item.id !== deletedItem.id
    );

    const updatedList = {
      ...data[listIndex],
      items: updatedItems
    };

    await updateReading({ listId, ...updatedList }).unwrap();
  };

  return (
    <BaseList
      itemComponent={TodoListCard}
      listData={data}
      isLoading={isLoading}
      handleDeleteItem={handleDeleteItem}
      handleDeleteList={handleDeleteList}
    />

  )
}

export default ListOfTodoLists;