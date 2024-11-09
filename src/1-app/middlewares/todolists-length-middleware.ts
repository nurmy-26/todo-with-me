import { Middleware } from "@reduxjs/toolkit";
import { todolistsApi } from "../../6-shared/api/todolists";

// middleware для хранения количества списков в localStorage
export const todolistsLengthMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState();
    const queryKey = 'getTodoLists("")';
    const todolistsData =
      state[todolistsApi.reducerPath].queries[queryKey]?.data;

    if (todolistsData) {
      const todolistsLength = JSON.stringify(todolistsData.length);
      const prevTodolistsLength = localStorage.getItem("todolists-length") || 0;

      // если значение "todolists-length" в LS отличается от текущего - перезаписываем
      if (todolistsLength !== prevTodolistsLength) {
        localStorage.setItem("todolists-length", todolistsLength);
      }
    }

    return result;
  };
