import { useState } from "react";
import { useGetTodoLists, useUpdateTodoList } from "../../../5-entities";
import { TList } from "../../../6-shared/types";
import { generateTodoItem } from "../../../6-shared/lib/utils/generateTodoItem";

// хук для добавления нового элемента в TodoList
export const useAddTodo = () => {
  const { data } = useGetTodoLists();
  const { updateList, isLoading } = useUpdateTodoList();
  const [error, setError] = useState<string | null>(null);

  const addTodo = async (
    listTitle: string,
    inputValue: string,
    isDone?: boolean
  ) => {
    setError(null); // сброс ошибки перед началом

    try {
      // формируем новый пункт списка с id из полученной информации
      const listItem = generateTodoItem(inputValue, isDone);

      // получаем обновленный список, чтобы передать его в updateList
      const selectedList: TList = data.find(
        (list: TList) => list.title === listTitle
      );
      if (!selectedList) {
        throw new Error(`List with title ${listTitle} was not found`);
      }

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
