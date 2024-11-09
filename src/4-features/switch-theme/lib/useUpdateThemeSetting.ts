import { useUpdateThemeSettingMutation } from "../../../6-shared/api/settings";
import { TTheme } from "../../../6-shared/types";

// обновление темы в настройках
export const useUpdateThemeSetting = () => {
  const [updateTheme, { isLoading, isError }] = useUpdateThemeSettingMutation();

  const updateThemeSetting = async (newTheme: TTheme) => {
    await updateTheme(newTheme).unwrap();
  };

  return {
    updateThemeSetting,
    isLoading,
    isError,
  };
};
