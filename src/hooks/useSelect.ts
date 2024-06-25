import { useState } from "react";


// T - объект со строковыми ключами и любыми типами значений
// принимает аргументы: массив объектов; ключ объекта, для которого нужно извлечь значения
export const useSelect = <T extends Record<string, any>>(objArray: T[], key: string | number) => {
  // извлекаем массив значений для указанного ключа
  const valueList = objArray.map(obj => obj[key]);

  // используем состояние для хранения выбранного значения (по умолч. - первое)
  const [selectedValue, setSelected] = useState<keyof T>(valueList[0]);

  // обработчик изменения выбора в select
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value as keyof T);
  };

  return {
    selectedValue,
    setSelected,
    valueList,
    handleSelect,
  }
}