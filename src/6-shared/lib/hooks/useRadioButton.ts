import { ChangeEvent, useState } from "react";

export const useRadioButton = <T extends string>(initialState?: T) => {
  const [selectedRadio, setSelectedRadio] = useState<T | undefined>(
    initialState
  );

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as T;
    setSelectedRadio(value);
  };

  return {
    selectedRadio,
    setSelectedRadio,
    handleRadioChange,
  };
};
