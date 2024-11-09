// сколько рендерить заглушек для карточек во время загрузки
// в идеале - фактическое количество; минимум 3, максимум 10 т.к. больше всё равно не видно
const storedListsLength = Number(localStorage.getItem("todolists-length"));

export const getAverageSkeletonNumber = (
  defaultSkeletonCards = 3,
  maxSkeletonCards = 10
) => {
  return storedListsLength !== null
    ? storedListsLength >= maxSkeletonCards
      ? maxSkeletonCards
      : storedListsLength
    : defaultSkeletonCards;
};
