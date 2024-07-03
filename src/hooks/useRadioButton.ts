import { useState } from "react";

export const useRadioButton = <T extends string>(initialState?: T) => {
  const [selectedRadio, setSelectedRadio] = useState<T | undefined>(initialState);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as T;
    setSelectedRadio(value);
  };

  return {
    selectedRadio,
    setSelectedRadio,
    handleRadioChange
  };
};