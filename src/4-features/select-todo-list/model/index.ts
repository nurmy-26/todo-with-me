import { useGetTodoLists } from "../../../5-entities";
import { useSelect } from "../../../6-shared/lib/useSelect";
import { TList } from "../../../6-shared/types";

// хук для выбора TodoList по title из списка select
export const useSelectTodoListTitle = () => {
  const { data = [] } = useGetTodoLists();
  const { selectedValue, valueList, handleSelect } = useSelect<TList>(
    data,
    "title"
  );

  return {
    selectedValue,
    valueList,
    handleSelect,
  };
};
