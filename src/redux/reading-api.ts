import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// создали редьюсер readingApi с доп-возможностями (свои fetch писать не нужно)
export const readingApi = createApi({
  // отображение в общем store
  reducerPath: "readingApi",
  // магия изменений в реальном времени (отображение актуального состояния на фронтенде)
  tagTypes: ["Readings"], // сущности могут иметь любые имена (указали сущность Reading)

  // базовый url (все запросы будет делать сама библиотека)
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    // запрос на получение
    getReading: build.query({
      // что добавить к baseUrl (можно писать со слешем или без - разницы нет)
      // query: () => 'reading',
      query: (limit = "") => `reading?${limit && `_limit=${limit}`}`,
      // указываем, с чем работаем (со списком сущностей Readings) и добавляем уникальный id:
      providesTags: (result) =>
        // если результат есть - вернем массив со всеми эл-ми результата
        result
          ? [
              ...result.map(({ id }) => ({ type: "Readings" as const, id })),
              { type: "Readings", id: "LIST" },
            ]
          : [{ type: "Readings", id: "LIST" }],
    }),

    // запрос на добавление нового (мутацией будет всё, кроме простого получения данных)
    addReading: build.mutation({
      // в запросе отправляем url, method и body запроса
      query: (body) => ({
        url: "reading", // делаем запрос на саму сущность, без уточнений
        method: "POST",
        body,
      }),
      // указываем, что при добавлении меняется этот список сущностей Reading
      invalidatesTags: [{ type: "Readings", id: "LIST" }],
    }),

    // запрос на удаление
    deleteReading: build.mutation({
      query: (id) => ({
        url: `reading/${id}`,
        method: "DELETE",
      }),
      // указываем, что при добавлении меняется этот список сущностей Reading
      invalidatesTags: [{ type: "Readings", id: "LIST" }],
    }),
  }),
});

// деструктурируем, чтобы получить и затем использовать встроенные хуки
// (напр., useLazyGetReadingQuery - с ленивой загрузкой)
export const {
  useGetReadingQuery,
  useAddReadingMutation,
  useDeleteReadingMutation,
} = readingApi;
