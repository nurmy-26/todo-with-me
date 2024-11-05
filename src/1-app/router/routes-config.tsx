import { RouteObject } from "react-router-dom";
import { CardPage, MainPage, NotFound404Page } from '../../2-pages';
import { routes } from "../../6-shared/const/routes";

export const routesConfig: RouteObject[] = [
  {
    path: routes.home,
    element: <MainPage />,
  },
  {
    path: `${routes.todolists.todolists}/:id`,
    element: <CardPage />,
  },
  {
    path: '*',
    element: <NotFound404Page />,
  },
];