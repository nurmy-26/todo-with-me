import { TItem, TList } from "./mock-data";

// запись массива объектов
export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// пример использования:
// const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// saveToLocalStorage('users', users);

// чтение массива объектов
export const loadFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// найти элемент в объекте массива arr (например, 'todo-list'), зная имя списка и id элемента, и удалить
export const removeListItemFromLocalStorage = <T>(
  arrKey: string,
  itemId: string,
  listTitle: string
): T | null => {
  const todoListString = localStorage.getItem(arrKey);

  if (!todoListString) {
    console.log("No data found in localStorage for key:", arrKey);
    return null;
  }

  const todoList = JSON.parse(todoListString);

  const listIndex = todoList.findIndex((list: any) => list.title === listTitle);

  if (listIndex === -1 || !todoList[listIndex].items) {
    console.log("List not found or no items in the list:", listTitle);
    return null;
  }

  console.log(
    "Before deletion, items:",
    JSON.stringify(todoList[listIndex].items)
  );

  const updatedItems = todoList[listIndex].items.filter(
    (item: any) => item.id !== itemId
  );

  todoList[listIndex] = { ...todoList[listIndex], items: updatedItems };

  localStorage.setItem(arrKey, JSON.stringify(todoList));

  console.log("After deletion, updated items:", JSON.stringify(updatedItems));

  return todoList;
};

// обновление массива объектов
export const updateLocalStorageArray = <T>(key: string, newValue: T) => {
  // получаем существующие данные из localStorage
  const existingData = localStorage.getItem(key);

  let dataArray;

  if (existingData) {
    // если данные существуют, парсим их как массив
    dataArray = JSON.parse(existingData);
  } else {
    // если данных нет, создаем новый массив
    dataArray = [];
  }

  // добавляем новое значение в конец массива
  dataArray.push(newValue);

  // мохраняем обновленный массив обратно в localStorage
  localStorage.setItem(key, JSON.stringify(dataArray));
};

// обновление объекта в массиве
export const updateItemInLocalStorage = (
  key: string,
  itemId: string,
  updatedData: Partial<{ id: string; title: string }>
) => {
  const arr = loadFromLocalStorage<{ id: string; name: string }[]>(key);
  if (arr) {
    const updatedItems = arr.map((item) =>
      item.id === itemId ? { ...item, ...updatedData } : item
    );
    saveToLocalStorage(key, updatedItems);
  }
};
// пример использования
// updateUserInLocalStorage('users', 1, { name: 'Johnny' });

// удаление объекта из массива
export const deleteUserFromLocalStorage = (key: string, userId: number) => {
  const users = loadFromLocalStorage<{ id: number; name: string }[]>(key);
  if (users) {
    const filteredUsers = users.filter((user) => user.id !== userId);
    saveToLocalStorage(key, filteredUsers);
  }
};
// пример использования
// deleteUserFromLocalStorage('users', 2);

// добавить элемент в список
export const addItemToArrayInLocalStorage = (
  key: string,
  listId: string,
  // newItem: string
  newItem: TItem
) => {
  const arr = loadFromLocalStorage<TList[]>(key);

  if (arr) {
    const updatedLists = arr.map((list) =>
      list.id === listId ? { ...list, items: [...list.items, newItem] } : list
    );
    saveToLocalStorage(key, updatedLists);
  }
};

// выставить задержку перед каким-либо действием
const setDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default setDelay;
