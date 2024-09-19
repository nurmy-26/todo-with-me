import { RouteObject } from "react-router-dom";
import { CardPage, MainPage, NotFound404Page } from '../../2-pages';
import { DeleteListDetails, TodoCard } from "../../3-widgets";
import { routes } from "../../6-shared/const/routes";

export const routesConfig: RouteObject[] = [
  {
    path: routes.home,
    element: <MainPage />,
  },
  {
    path: `${routes.todolist}/:id`,
    element: <CardPage />,
  },
  {
    path: '*',
    element: <NotFound404Page />,
  },
];

export const modalRoutesConfig: RouteObject[] = [
  {
    path: `${routes.todolist}/:id`,
    element: <TodoCard type={'modal'} />,
  },
  {
    path: `${routes.delete}/:id`,
    element: <DeleteListDetails />,
  },
];