import { useEffect } from "react";

// хук для отслеживания кликов вне wrapper и вызова функции в этот момент
export const useOutsideClick = (
  wrapperRef: React.RefObject<HTMLElement>,
  outsideClickCallback: () => void
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

    // вешаем обработчик
    document.addEventListener("mousedown", handleOutsideClick);

    // удаляем при размонтировании
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [wrapperRef, outsideClickCallback]);
};
