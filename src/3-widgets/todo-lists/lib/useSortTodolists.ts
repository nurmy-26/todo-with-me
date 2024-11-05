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
    // вспомогательная ф-я чтоб не дублировать код
    const compareValues = (
      aComparedValue: string | number,
      bComparedValue: string | number
    ) => {
      if (aComparedValue < bComparedValue) {
        return sortMode === "asc" ? -1 : 1;
      } else if (aComparedValue > bComparedValue) {
        return sortMode === "asc" ? 1 : -1;
      }
      return 0;
    };

    return !sortMode || !sortProp
      ? items
      : items.slice().sort((a: TList, b: TList) => {
          const aValue = a[sortProp];
          const bValue = b[sortProp];

          // если сравниваются строковые значения (например, сортировка по title)
          if (typeof aValue === "string" && typeof bValue === "string") {
            const aComparedValue = String(aValue).toLowerCase();
            const bComparedValue = String(bValue).toLowerCase();

            return compareValues(aComparedValue, bComparedValue);
          }

          // сравнение выполненных дел - сколько isDone в todolists[items]
          else if (
            Array.isArray(aValue) &&
            Array.isArray(bValue) &&
            sortProp === "items"
          ) {
            const aComparedValue = aValue.filter((item) => item.isDone).length;
            const bComparedValue = bValue.filter((item) => item.isDone).length;

            return compareValues(aComparedValue, bComparedValue);
          }

          // если поле - массивами, то сравниваем их длину
          else if (Array.isArray(aValue) && Array.isArray(bValue)) {
            const aComparedValue = aValue.length;
            const bComparedValue = bValue.length;

            return compareValues(aComparedValue, bComparedValue);
          }

          // иначе обычная сортировка
          else if (typeof aValue === "number" && typeof bValue === "number") {
            return sortMode === "asc" ? aValue - bValue : bValue - aValue;
          }
          return 0;
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
