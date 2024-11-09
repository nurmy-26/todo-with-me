import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useFilter = <T>(
  items: T[],
  // filterFn - колбэк для фильтрации исходных items на основе инпута search и других условий
  filterFn: (item: T, debouncedSearchValue: string) => boolean
) => {
  const initialState = "";
  const [searchValue, setSearchValue] = useState(initialState);

  // значение для фильтрации будет обновляться раз в 300мс, а не при каждом нажатии
  const activeSearchValue = useDebounce(searchValue, 300);

  const filteredItems = useMemo(() => {
    return activeSearchValue
      ? items.filter((item) => filterFn(item, activeSearchValue))
      : items;
  }, [items, activeSearchValue, filterFn]);

  const resetSearch = () => {
    setSearchValue(initialState);
  };

  return {
    searchValue,
    setSearchValue,
    filteredItems,
    resetSearch,
  };
};
