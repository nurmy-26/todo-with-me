import { configureStore } from "@reduxjs/toolkit";
import { todolistApi } from "../../6-shared/api/todolist-api";

export const store = configureStore({
  reducer: {
    [todolistApi.reducerPath]: todolistApi.reducer,
  },
  // добавляем к дефолтным мидлварам мидлвар из todolistApi
  // todolistApi.reducer и todolistApi.middleware создаются сами
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todolistApi.middleware),
});
