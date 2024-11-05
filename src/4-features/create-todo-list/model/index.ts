import { useCreateNewTodoList } from "../../../5-entities";
import { TItem } from "../../../6-shared/types";
import { generateTodoList } from "../lib/generateTodoList";

// хук для создания нового TodoList
export const useCreateTodoList = () => {
  const { createList, isLoading, isError } = useCreateNewTodoList();

  const createTodoList = async (listTitle: string, items?: TItem[]) => {
    // формируем новый список
    const newList = generateTodoList(listTitle, items);

    await createList(newList);
  };

  return {
    createTodoList,
    isLoading,
    isError,
  };
};
