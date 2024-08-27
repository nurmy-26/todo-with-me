import { configureStore } from "@reduxjs/toolkit";
import { todolistApi } from "./todolist-api";

export const store = configureStore({
  reducer: {
    [todolistApi.reducerPath]: todolistApi.reducer,
  },
  // добавляем к дефолтным мидлварам мидлвар из todolistApi
  // todolistApi.reducer и todolistApi.middleware создаются сами
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todolistApi.middleware),
});
