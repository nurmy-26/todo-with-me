export const shuffleArray = <T>(arr: Array<T>) => {
  const newArr = [...arr]; // создаем копию чтоб не менять исходный массив

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
