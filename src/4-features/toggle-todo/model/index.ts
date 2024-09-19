import { useState } from "react";
import { useGetTodoLists, useUpdateTodoList } from "../../../5-entities";
import { TItem, TList } from "../../../6-shared/types";

// хук для перещелкивания статуса isDone элемента в TodoList
export const useToggleTodo = () => {
  const { data } = useGetTodoLists();
  const { updateList, isLoading } = useUpdateTodoList();
  const [error, setError] = useState<string | null>(null);

  const toggleTodo = async (listId: string, itemId: string) => {
    setError(null); // сброс ошибки перед началом

    try {
      // находим нужный список
      const listIndex = data.findIndex((list: TList) => list.id === listId);

      if (listIndex === -1) throw new Error("List not found");

      // проходим по всем элементам и меняем статус у нужного
      const updatedItems = data[listIndex].items.map((item: TItem) =>
        item.id === itemId ? { ...item, isDone: !item.isDone } : item
      );

      const updatedList = {
        ...data[listIndex],
        items: updatedItems,
      };

      // обновляем в БД
      await updateList(listId, updatedList);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return {
    toggleTodo,
    isLoading,
    error,
  };
};
