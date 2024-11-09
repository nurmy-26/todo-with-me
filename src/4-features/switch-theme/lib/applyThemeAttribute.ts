import { TTheme } from "../../../6-shared/types";

export const applyThemeAttribute = (theme: TTheme) => {
  const bodySelector = document.querySelector(":root");
  bodySelector?.setAttribute("data-theme", theme);
};
