import { useEffect, useState } from "react";
import { TTheme } from "../../../6-shared/types";
import { THEME } from "../../../6-shared/const/theme";
import { useGetThemeSetting } from "../lib/useGetThemeSetting";
import { useUpdateThemeSetting } from "../lib/useUpdateThemeSetting";
import { applyThemeAttribute } from "../lib/utils";

export const useTheme = () => {
  const { theme: serverTheme } = useGetThemeSetting(); // получаем тему с сервера
  const { updateThemeSetting } = useUpdateThemeSetting();
  const [theme, setTheme] = useState<TTheme>(THEME.WARM); // фолбек на случай отсутствия данных (light по умолчанию)

  const privateSwitchTheme = (
    newTheme: TTheme,
    updateLocalStorage: boolean = false
  ) => {
    setTheme(newTheme); // сохраняем значение
    applyThemeAttribute(newTheme); // управляем css-переменными в body

    // обновляем localStorage, только если это необходимо
    if (updateLocalStorage) {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    // изначально пытаемся достать тему из LocalStorage
    const storedTheme = localStorage.getItem("theme") as TTheme;

    // если тема есть в localStorage, используем её
    if (storedTheme) {
      privateSwitchTheme(storedTheme); // не обновляем LS и сервер при загрузке из localStorage

      // иначе берем тему с сервера, используем и сохраняем в localStorage
    } else if (serverTheme) {
      privateSwitchTheme(serverTheme, true); // записываем в LS при первой загрузке с сервера
    }
  }, [serverTheme]);

  // при обновлении в компоненте мы всегда обновляем LS и значение на сервере -> экспортируем отдельную функцию
  const switchTheme = (newTheme: TTheme) => {
    privateSwitchTheme(newTheme, true); // // обновляем тему в LocalStorage
    updateThemeSetting(newTheme); // обновляем тему на сервере
  };

  // переключатель light/dark и warm/night
  const toggleTheme = () => {
    if (theme === THEME.LIGHT) {
      switchTheme(THEME.DARK);
    } else if (theme === THEME.DARK) {
      switchTheme(THEME.LIGHT);
    } else if (theme === THEME.WARM) {
      switchTheme(THEME.NIGHT);
    } else if (theme === THEME.NIGHT) {
      switchTheme(THEME.WARM);
    } else {
      // если добавится больше тем - переключит на warm по умолчанию
      switchTheme(THEME.WARM);
    }
  };

  return {
    theme,
    switchTheme,
    toggleTheme,
  };
};
