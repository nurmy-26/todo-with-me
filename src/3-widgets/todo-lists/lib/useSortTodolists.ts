import { useMemo, useState } from "react";
import { TList } from "../../../6-shared/types";

// сортировка по переданному полю sortProp (по возрастанию "asc" или убыванию "desc")
export const useSortTodolists = (items: TList[], sortProp: keyof TList) => {
  const initialState = "asc";
  const [sortMode, setSortMode] = useState<"asc" | "desc">(initialState);

  const toggleSortMode = () => {
    setSortMode((prevMode) => (prevMode === "asc" ? "desc" : "asc"));
  };

  const resetSort = () => {
    setSortMode(initialState);
  };

  const sortedItems = useMemo(() => {
    return !sortMode || !sortProp
      ? items
      : items.slice().sort((a: TList, b: TList) => {
          const aValue = a[sortProp];
          const bValue = b[sortProp];

          // если сравниваются строковые значения (например, сортировка по title)
          if (typeof aValue === "string" && typeof bValue === "string") {
            const aStringValue = String(aValue).toLowerCase();
            const bStringValue = String(bValue).toLowerCase();

            if (sortMode === "asc" && aStringValue > bStringValue) {
              return 1;
            } else if (sortMode === "desc" && aStringValue > bStringValue) {
              return -1;
            }
          }

          // сравнение выполненных дел - сколько isDone в todolists[items]
          if (
            Array.isArray(aValue) &&
            Array.isArray(bValue) &&
            sortProp === "items"
          ) {
            const aFinishedCount = aValue.filter((item) => item.isDone).length;
            const bFinishedCount = bValue.filter((item) => item.isDone).length;

            if (sortMode === "asc" && aFinishedCount > bFinishedCount) {
              return 1;
            } else if (sortMode === "desc" && aFinishedCount > bFinishedCount) {
              return -1;
            }
          }

          // если поле - массивами, то сравниваем их длину
          if (Array.isArray(aValue) && Array.isArray(bValue)) {
            const aItemsCount = aValue.length;
            const bItemsCount = bValue.length;

            if (sortMode === "asc" && aItemsCount > bItemsCount) {
              return 1;
            } else if (sortMode === "desc" && aItemsCount > bItemsCount) {
              return -1;
            }
          }

          // иначе обычная сортировка
          if (sortMode === "asc") {
            return -1;
          } else {
            return 1;
          }
        });
  }, [items, sortProp, sortMode]);

  return {
    sortMode,
    setSortMode,
    toggleSortMode,
    resetSort,
    sortedItems,
  };
};
