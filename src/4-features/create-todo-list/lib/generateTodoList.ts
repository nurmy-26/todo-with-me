import { v4 as uuidv4 } from "uuid";
import { TItem, TList } from "../../../6-shared/types";

export const generateTodoList = (listTitle: string, items?: TItem[]) => {
  const itemsValue = items ? items : []; // если items не переданы, то пустой массив

  const newList: TList = {
    id: uuidv4(),
    creationDate: new Date(),
    title: listTitle,
    items: itemsValue,
  };

  return newList;
};
