import { v4 as uuidv4 } from "uuid";
import { useCreateNewTodoList } from "../../../5-entities";
import { TList } from "../../../6-shared/types";

// хук для создания нового TodoList
export const useCreateTodoList = () => {
  const { createList, isLoading, isError } = useCreateNewTodoList();

  const createTodoList = async (listTitle: string) => {
    // формируем новый список (title будем получать из инпута)
    const newList: TList = {
      id: uuidv4(),
      creationDate: new Date(),
      title: listTitle,
      items: [],
    };

    await createList(newList);
  };

  return {
    createTodoList,
    isLoading,
    isError,
  };
};
