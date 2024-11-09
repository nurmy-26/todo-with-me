import { ChangeEvent, useState } from "react";

// T - объект со строковыми ключами и любыми типами значений
// принимает аргументы: массив объектов; ключ объекта, для которого нужно извлечь значения
export const useSelect = <T extends Record<string, string>>(
  objArray: T[],
  key: keyof T,
  idKey: keyof T = "id"
) => {
  // извлекаем массив объектов с необходимыми полями (id для идентификации и title для исп-я)
  const valueList = objArray.map((obj) => ({
    id: obj[idKey],
    title: obj[key],
  }));

  // используем состояние для хранения выбранного значения (по умолч. - первое)
  const [selectedValue, setSelectedValue] = useState<T[keyof T]>(
    valueList.length > 0 ? valueList[0].title : ("" as T[keyof T])
  );
  const [selectedId, setSelectedId] = useState<T[keyof T]>(
    objArray.length > 0 ? objArray[0][idKey] : ("" as T[keyof T])
  );

  // обработчик изменения выбора в select
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setSelectedId(selectedId as T[keyof T]);

    const selectedObj = objArray.find((obj) => obj[idKey] === selectedId);
    if (selectedObj) {
      setSelectedValue(selectedObj[key]);
    }
  };

  return {
    selectedValue,
    selectedId,
    setSelectedValue,
    setSelectedId,
    valueList,
    handleSelect,
  };
};
