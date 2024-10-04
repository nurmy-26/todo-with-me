import { TList } from "../../../6-shared/types";
import {
  useAddTodoListMutation,
  useDeleteTodoListMutation,
  useGetTodoListQuery,
  useGetTodoListsQuery,
  useUpdateTodoListMutation,
} from "../../../6-shared/api/todolists";
import { queryConfig } from "../../../6-shared/config/query";

// получение всех TodoList
export const useGetTodoLists = (
  // значения по умолчанию, но при желании можно будет передать другие
  limit = queryConfig.limit,
  options = queryConfig.options
) => {
  const {
    data = [],
    isLoading,
    isError,
  } = useGetTodoListsQuery(limit, options);

  return {
    data,
    isLoading,
    isError,
  };
};

// получение конкретного списка по id
export const useGetTodoListById = (id: string) => {
  const { data: listInfo, isLoading, isError } = useGetTodoListQuery(id);

  return {
    listInfo,
    isLoading,
    isError,
  };
};

// создание TodoList
export const useCreateNewTodoList = () => {
  const [addTodoList, { isLoading, isError }] = useAddTodoListMutation();

  const createList = async (createdList: TList) => {
    await addTodoList({ ...createdList }).unwrap();
  };

  return {
    createList,
    isLoading,
    isError,
  };
};

// обновление TodoList по id
export const useUpdateTodoList = () => {
  const [updateTodoList, { isLoading, isError }] = useUpdateTodoListMutation();

  const updateList = async (listId: string, updatedList: TList) => {
    await updateTodoList({ listId, ...updatedList }).unwrap();
  };
  return {
    updateList,
    isLoading,
    isError,
  };
};

// удаление TodoList по id
export const useDeleteTodoList = () => {
  const [deleteTodoList, { isLoading, isError }] = useDeleteTodoListMutation();

  const deleteList = async (listId: string) => {
    await deleteTodoList(listId).unwrap();
  };

  return {
    deleteList,
    isLoading,
    isError,
  };
};
