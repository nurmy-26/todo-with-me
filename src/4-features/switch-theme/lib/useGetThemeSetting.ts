import { useGetSettingsQuery } from "../../../6-shared/api/settings";
import { queryConfig } from "../../../6-shared/config/query";
import { TTheme } from "../../../6-shared/types";

// получение темы из настроек
export const useGetThemeSetting = (
  // значения по умолчанию, но при желании можно передать другие
  limit = queryConfig.limit,
  options = queryConfig.options
) => {
  const {
    data: settingsData,
    isLoading,
    isError,
  } = useGetSettingsQuery(limit, options);

  // извлечение значения темы из данных настроек
  const theme: TTheme = settingsData?.theme;

  return {
    theme,
    isLoading,
    isError,
  };
};
