import { TList } from "../../../6-shared/types";

export const filterByCheckboxes = (
  firstCheckbox: boolean,
  secondCheckbox: boolean
) => {
  return (item: TList, debouncedSearchValue: string) => {
    const searchValueLowerCase = debouncedSearchValue.toLowerCase();

    const isTitleMatch = item.title
      .toLowerCase()
      .includes(searchValueLowerCase);
    const isItemMatch = item.items.some((item) =>
      item.title.toLowerCase().includes(searchValueLowerCase)
    );

    // если выбраны оба чекбокса, поиск по обоим критериям
    if (firstCheckbox && secondCheckbox) {
      return isTitleMatch || isItemMatch;
      // если только первый - поиск по первому
    } else if (firstCheckbox) {
      return isTitleMatch;
      // если только второй - по второму
    } else if (secondCheckbox) {
      return isItemMatch;
      // если ничего не выбрано - просто возвращаем все элементы
    } else {
      return true;
    }
  };
};
