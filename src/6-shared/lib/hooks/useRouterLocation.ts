import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../const/routes";

export const useRouterLocation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // существует ли state у текущего роута; если да - присвоим переменной значение state.background (в т.ч. undefined)
  // т.о. мы запоминаем страницу, с которой открыли модалку (для дальнейшего использования её в кач-ве подложки)
  const background = location.state && location.state.background;

  // при закрытии модалки возвращаемся на роут, с которого её открывали (и который записан в background)
  const returnToPreviousPage = () => {
    navigate(-1);
  };

  const returnToHomePage = () => {
    navigate(routes.home);
  };

  return {
    navigate,
    location,
    background,
    returnToPreviousPage,
    returnToHomePage,
  };
};
