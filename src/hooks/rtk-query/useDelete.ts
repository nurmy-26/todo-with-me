import { useDeleteTodoListMutation } from "../../redux";

// хук для удаления TodoList по id
export const useDelete = () => {
  const [deleteTodoList] = useDeleteTodoListMutation();

  const deleteList = async (id: string) => {
    await deleteTodoList(id).unwrap();
  };

  return {
    deleteList,
  };
};
