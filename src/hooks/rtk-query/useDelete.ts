import { useDeleteReadingMutation } from "../../redux";

// хук для удаления TodoList по id
export const useDelete = () => {
  const [deleteReading] = useDeleteReadingMutation();

  const deleteList = async (id: string) => {
    await deleteReading(id).unwrap();
  };

  return {
    deleteList,
  };
};
