import { useEffect } from "react";

const useEscape = (onEscape: () => void) => {
  useEffect(() => {
    const closeByEsc = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", closeByEsc);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [onEscape]);
};

export default useEscape;
