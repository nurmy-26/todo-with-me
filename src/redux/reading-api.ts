import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// создали редьюсер readingApi с доп-возможностями (свои fetch писать не нужно)
export const readingApi = createApi({
  // отображение в общем store
  reducerPath: "readingApi",
  // магия изменений в реальном времени (отображение актуального состояния на фронтенде)
  tagTypes: ["Reading"], // сущности могут иметь любые имена (указали сущность Reading)

  // базовый url (все запросы будет делать сама библиотека)
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    // запрос на получение
    getReadings: build.query({
      // что добавить к baseUrl (можно писать со слешем или без - разницы нет)
      // query: () => 'reading',
      query: (limit = "") => `readings?${limit && `_limit=${limit}`}`,
      // указываем, с чем работаем (со списком сущностей Reading) и добавляем уникальный id:
      providesTags: (result) =>
        // если результат есть - вернем массив со всеми эл-ми результата
        result
          ? [
              ...result.map(({ id }) => ({ type: "Reading" as const, id })),
              { type: "Reading", id: "LIST" },
            ]
          : [{ type: "Reading", id: "LIST" }],
    }),

    // запрос на добавление нового (мутацией будет всё, кроме простого получения данных)
    addReading: build.mutation({
      // в запросе отправляем url, method и body запроса
      query: (body) => ({
        url: "readings", // делаем запрос на саму сущность, без уточнений
        method: "POST",
        body,
      }),
      // указываем, что при добавлении меняется этот список сущностей Reading
      invalidatesTags: [{ type: "Reading", id: "LIST" }],
    }),

    // получение конкретного списка
    getReading: build.query({
      query: (id) => `readings/${id}`,
      providesTags: (result, error, id) => [{ type: "Reading", id }],
    }),

    // запрос на обновление списка
    updateReading: build.mutation({
      query: ({ listId, ...newItem }) => ({
        url: `readings/${listId}`,
        method: "PUT",
        body: newItem,
      }),
      onQueryStarted({ listId, ...newItem }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          readingApi.util.updateQueryData("getReading", listId, (draft) => {
            Object.assign(draft, newItem);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
      // указываем, что при добавлении меняется этот список сущностей Reading
      invalidatesTags: (result, error, { id }) => [{ type: "Reading", id }],
    }),

    // запрос на удаление списка
    deleteReading: build.mutation({
      query: (id) => ({
        url: `readings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Reading", id }],
    }),
  }),
});

// деструктурируем, чтобы получить и затем использовать встроенные хуки
// (напр., useLazyGetReadingQuery - с ленивой загрузкой)
export const {
  useGetReadingsQuery,
  useAddReadingMutation,
  useGetReadingQuery,
  useUpdateReadingMutation,
  useDeleteReadingMutation,
} = readingApi;
