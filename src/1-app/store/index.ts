import { configureStore } from "@reduxjs/toolkit";
import { todolistsApi } from "../../6-shared/api/todolists";
import { settingsApi } from "../../6-shared/api/settings";

export const store = configureStore({
  reducer: {
    [todolistsApi.reducerPath]: todolistsApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  // добавляем к дефолтным мидлварам мидлвар из todolistsApi
  // todolistsApi.reducer и todolistsApi.middleware создаются сами
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todolistsApi.middleware)
      .concat(settingsApi.middleware),
});
