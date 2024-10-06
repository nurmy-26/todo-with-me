import { useState } from "react";

export const useCheckbox = (initialState: boolean = false) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return {
    isChecked,
    setIsChecked,
    toggleCheckbox,
  };
};
