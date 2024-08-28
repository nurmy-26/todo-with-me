import { useState } from "react";
import {
  useGetTodoLists,
  useUpdateTodoList,
} from "../../../5-entities/Todo/model";
import { TItem, TList } from "../../../5-entities/Todo/model/types";

// хук для удаления элемента из TodoList
export const useRemoveTodo = () => {
  const { data } = useGetTodoLists();
  const { updateList, isLoading } = useUpdateTodoList();
  const [error, setError] = useState<string | null>(null);

  const removeTodo = async (listId: string, itemId: string) => {
    setError(null); // сброс ошибки перед началом

    try {
      // находим нужный список
      const listIndex = data.findIndex((list: TList) => list.id === listId);

      if (listIndex === -1) throw new Error("List not found");

      // фильтруем его чтоб убрать удаляемый элемент
      const updatedItems = data[listIndex].items.filter(
        (item: TItem) => item.id !== itemId
      );

      const updatedList = {
        ...data[listIndex],
        items: updatedItems,
      };

      await updateList(listId, updatedList);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return {
    removeTodo,
    isLoading,
    error,
  };
};
