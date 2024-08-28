import { useState } from "react";

export const useCheckbox = (initialState: boolean = false) => {
  const [checkbox, setCheckbox] = useState(initialState);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return {
    checkbox,
    setCheckbox,
    toggleCheckbox,
  };
};
