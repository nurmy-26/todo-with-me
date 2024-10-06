import { RefObject, useEffect } from "react";

// хук для отслеживания кликов вне wrapper и вызова функции в этот момент
export const useOutsideClick = (
  wrapperRef: RefObject<HTMLElement>,
  outsideClickCallback: () => void,
  isListen: boolean = true
) => {
  useEffect(() => {
    // объявляем обработчик кликов, который проверяет, был ли клик за пределами wrapper
    const handleOutsideClick = (event: MouseEvent) => {
      // второе условие - чтоб обработчик не срабатывал при клике внутри
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        // вызовет переданную функцию
        outsideClickCallback();
      }
    };

    // если нам нужно, чтобы слушатель вешался только после какого-либо события, передаем изменяющийся isListen
    // иначе перманентно true
    if (isListen) {
      // вешаем обработчик
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // удаляем при размонтировании
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [wrapperRef, outsideClickCallback, isListen]);
};
