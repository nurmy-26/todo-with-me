import { MouseEventHandler } from "react";

export type TItem = {
  id: string;
  title: string;
};

export type TList = {
  id: string;
  title: string;
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
  onClick?: (event: React.FormEvent) => void;
  handleDeleteItem: (
    event: React.MouseEvent<HTMLButtonElement>,
    deletedItem: TItem,
    listTitle: string
  ) => Promise<void>;
  handleDeleteList: MouseEventHandler<HTMLButtonElement>;
};
