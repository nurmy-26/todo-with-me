import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// RTK-query
// создали редьюсер todolistsApi с доп-возможностями (свои fetch писать не нужно)
export const todolistsApi = createApi({
  // название редьюсера в общем store
  reducerPath: "todolistsApi",
  // магия изменений в реальном времени (отображение актуального состояния на фронтенде)
  tagTypes: ["TodoLists"], // сущности могут иметь любые имена (указали сущность TodoList)

  // базовый url (все запросы будет делать сама библиотека)
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    // запрос на получение
    getTodoLists: build.query({
      // что добавить к baseUrl (можно писать со слешем или без - разницы нет)
      // query: () => 'todolist',
      query: (limit = "") => `todolists?${limit && `_limit=${limit}`}`,
      // указываем, с чем работаем (со списком сущностей TodoList) и добавляем уникальный id:
      providesTags: (result) =>
        // если результат есть - вернем массив со всеми эл-ми результата
        result
          ? [
              ...result.map(({ id }) => ({ type: "TodoLists" as const, id })),
              { type: "TodoLists", id: "LIST" },
            ]
          : [{ type: "TodoLists", id: "LIST" }],
    }),

    // запрос на добавление нового (мутацией будет всё, кроме простого получения данных)
    addTodoList: build.mutation({
      // в запросе отправляем url, method и body запроса
      query: (body) => ({
        url: "todolists", // делаем запрос на саму сущность, без уточнений
        method: "POST",
        body,
      }),
      // указываем, что при добавлении меняется этот список сущностей TodoList
      invalidatesTags: [{ type: "TodoLists", id: "LIST" }],
    }),

    // получение конкретного списка
    getTodoList: build.query({
      query: (id) => `todolists/${id}`,
      providesTags: (result, error, id) => [{ type: "TodoLists", id }],
    }),

    // запрос на обновление списка
    updateTodoList: build.mutation({
      query: ({ listId, ...updatedList }) => ({
        url: `todolists/${listId}`,
        method: "PUT",
        body: updatedList,
      }),
      onQueryStarted({ listId, ...updatedList }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todolistsApi.util.updateQueryData("getTodoList", listId, (draft) => {
            Object.assign(draft, updatedList);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
      // указываем, что при добавлении меняется этот список сущностей TodoList
      invalidatesTags: (result, error, { id }) => [{ type: "TodoLists", id }],
    }),

    // запрос на удаление списка
    deleteTodoList: build.mutation({
      query: (id) => ({
        url: `todolists/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "TodoLists", id }],
    }),
  }),
});

// деструктурируем, чтобы получить и затем использовать встроенные хуки
// (напр., useLazyGetTodoListQuery - с ленивой загрузкой)
export const {
  useGetTodoListsQuery,
  useAddTodoListMutation,
  useGetTodoListQuery,
  useUpdateTodoListMutation,
  useDeleteTodoListMutation,
} = todolistsApi;
