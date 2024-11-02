import { FormEvent, MouseEvent, MouseEventHandler } from "react";
import { THEME } from "../const/theme";

export type TTheme = THEME;

export type TItem = {
  id: string;
  title: string;
  isDone: boolean;
  // finishDate
};

export type TList = {
  id: string;
  creationDate: Date;
  title: string;
  // color
  items: TItem[];
};

// todo - удалить, если не пригодится
export type TBook = TItem & {
  pages: number; // кол-во страниц
  cover: string; // ссылка на обложку
  grade: number; // оценка
  review: string; // ссылка на рецензию
  tile?: string; // ход по карте (клетка)
};

export type TListItemProps = {
  title?: string;
  listId: string;
  extraClass?: string;
  list?: TItem[];
  onClick?: (event: FormEvent) => void;
  handleDeleteItem: (
    event: MouseEvent<HTMLButtonElement>,
    deletedItem: TItem,
    listTitle: string
  ) => Promise<void>;
  handleDeleteList: MouseEventHandler<HTMLButtonElement>;
};

type TQueryOptions = {
  skip?: boolean;
  selectFromResult?: (result: any) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type TQueryConfig = {
  limit: string;
  options: TQueryOptions;
};
