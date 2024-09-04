import { useGetTodoLists } from "../../../5-entities/Todo/model";
import { TList } from "../../../5-entities/Todo/model/types";
import { useSelect } from "../../../6-shared/lib/useSelect";

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
