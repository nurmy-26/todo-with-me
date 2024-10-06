import { http, HttpResponse } from "msw";

// тут можно указать все возможные запросы, которые должен перехватывать msw в браузере
// если запускать всё приложение с msw
export const handlers = [
  // Intercept "GET http://localhost:3001/settings" requests
  // and respond to them using this JSON response.
  http.put("http://localhost:3001/settings", () => {
    // чтобы msw перехватывал запрос и не давал менять реальный store,
    // важно указать правильный метод запроса (тут - PUT), должен совпасть с методом из редьюсера
    return HttpResponse.json({ theme: "dark" });
  }),
];
