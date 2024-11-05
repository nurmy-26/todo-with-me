import { useDeleteTodoList, useGetTodoLists } from "../../../5-entities";
import { TList } from "../../../6-shared/types";

// хук для удаления всех TodoLists
export const useDeleteAllTodoLists = () => {
  const {
    data = [],
    isLoading: isDataLoading,
    isError: isDataError,
  } = useGetTodoLists();
  const {
    deleteList,
    isLoading: isDeleteLoading,
    isError: isDeleteError,
  } = useDeleteTodoList();
  const isLoading = isDataLoading || isDeleteLoading;
  const isError = isDataError || isDeleteError;

  const listsIds: string[] = data.map((item: TList) => item.id);

  const deleteAllTodoLists = () => {
    listsIds.map((id) => deleteList(id));
  };

  return {
    deleteAllTodoLists,
    isLoading,
    isError,
  };
};
