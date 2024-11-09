import { useEffect } from "react";

const useEscape = (onEscape: () => void, isListen: boolean = true) => {
  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    // если нам нужно, чтобы слушатель вешался только после какого-либо события, передаем изменяющийся isListen
    // иначе перманентно true
    if (isListen) {
      document.addEventListener("keydown", closeByEsc);
    }

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [onEscape, isListen]);
};

export default useEscape;
