import { v4 as uuidv4 } from "uuid";
import { TItem } from "../../types";

export const generateTodoItem = (itemTitle: string, isDone?: boolean) => {
  const isDoneValue = isDone ? isDone : false; // если items не переданы, то пустой массив

  const listItem: TItem = {
    id: uuidv4(),
    title: itemTitle,
    isDone: isDoneValue,
  };

  return listItem;
};
