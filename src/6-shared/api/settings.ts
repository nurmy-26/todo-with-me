import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTheme } from "../types";

export const settingsApi = createApi({
  // название редьюсера в общем store
  reducerPath: "settingsApi",
  // базовый URL для всех запросов
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  // типы тегов для автоматического обновления данных в реальном времени
  tagTypes: ["Settings"],

  endpoints: (build) => ({
    // запрос на получение настроек
    getSettings: build.query({
      query: (limit = "") => `settings?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result ? [{ type: "Settings", id: "SETTINGS" }] : [],
    }),

    // мутация для обновления темы в настройках
    updateThemeSetting: build.mutation({
      query: (newTheme: TTheme) => ({
        url: "settings/",
        method: "PUT",
        body: { theme: newTheme },
      }),
      invalidatesTags: [{ type: "Settings", id: "SETTINGS" }],
    }),
  }),
});

// экспортируем хуки для использования в компонентах
export const { useGetSettingsQuery, useUpdateThemeSettingMutation } =
  settingsApi;
