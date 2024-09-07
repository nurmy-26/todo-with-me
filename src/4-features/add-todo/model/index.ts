import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGetTodoLists, useUpdateTodoList } from "../../../5-entities";
import { TItem, TList } from "../../../6-shared/types";

// хук для добавления нового элемента в TodoList
export const useAddTodo = () => {
  const { data } = useGetTodoLists();
  const { updateList, isLoading } = useUpdateTodoList();
  const [error, setError] = useState<string | null>(null);

  const addTodo = async (itemTitle: string, inputValue: string) => {
    setError(null); // сброс ошибки перед началом

    try {
      // формируем новый пункт списка из информации, полученной из инпута(ов)
      const listItem: TItem = {
        id: uuidv4(),
        // title: itemValues['list-item-title'], - пример
        title: inputValue, // todo - потом может замениться более сложным объектом (собирается из разных полей)
        isDone: false,
      };

      // получаем обновленный список, чтобы передать его в updateList
      const selectedList: TList = data.find(
        (list: TList) => list.title === itemTitle
      );
      const updatedList = {
        ...selectedList,
        items: [...selectedList.items, listItem],
      };

      await updateList(selectedList.id, updatedList);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return {
    addTodo,
    isLoading,
    error,
  };
};
