import { generateTodoItem } from "../../../6-shared/lib/utils/generateTodoItem";
import { TItem } from "../../../6-shared/types";

type TData = {
  title: string;
  items?: string[];
};

export const generateTodoListFromData = (data: TData) => {
  let items: TItem[] = [];
  if (data.items) items = data.items.map((item) => generateTodoItem(item));

  // {title: '...', items: [ заполненные элементы с id и isDone ]}
  const list = {
    title: data.title,
    items,
  };

  return list;
};
