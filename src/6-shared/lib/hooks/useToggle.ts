import { useState } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    setState,
    toggle,
    reset,
  };
};
