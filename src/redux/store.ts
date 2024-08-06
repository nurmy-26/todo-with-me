import { configureStore } from "@reduxjs/toolkit";
import { readingApi } from "./reading-api";

export const store = configureStore({
  reducer: {
    [readingApi.reducerPath]: readingApi.reducer,
  },
  // добавляем к дефолтным мидлварам мидлвар из readingApi
  // readingApi.reducer и readingApi.middleware создаются сами
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(readingApi.middleware),
});
