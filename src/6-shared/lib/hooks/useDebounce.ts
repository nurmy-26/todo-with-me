import { useEffect, useState } from "react";

// хук для обновления значения не сразу, а с задержкой
// чтоб не вызывать срабатывание чего-либо 100500 раз в секунду
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
