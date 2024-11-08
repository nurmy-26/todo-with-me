import { useGetTodoLists } from "../../../5-entities";
import { useSelect } from "../../../6-shared/lib/hooks/useSelect";

// хук для выбора TodoList по title из списка select
export const useSelectTodoListTitle = () => {
  const { data = [] } = useGetTodoLists();
  const { selectedValue, valueList, handleSelect } = useSelect(data, "title");

  return {
    selectedValue,
    valueList,
    handleSelect,
  };
};
