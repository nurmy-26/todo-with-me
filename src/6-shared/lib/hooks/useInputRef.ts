import { useRef } from "react";

export const useInputRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // ф-я для деактивации input
  const deactivateInput = () => {
    inputRef.current?.blur(); // снять фокус с input
  };

  // ф-я для активации input
  const activateInput = () => {
    inputRef.current?.focus(); // поставить фокус на input
  };

  return {
    inputRef,
    deactivateInput,
    activateInput,
  };
};
