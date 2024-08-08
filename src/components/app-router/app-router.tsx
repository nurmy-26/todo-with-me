import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages';
import CardPage from '../../pages/card';
import TodoListDetails from '../todo-list-details';
// import Modal from "../UI/modal";


const AppRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // существует ли state у текущего роута; если да - присвоим переменной значение state.background (в т.ч. undefined)
  // т.о. мы запоминаем страницу, с которой открыли модалку (для дальнейшего использования её в кач-ве подложки)
  const background = location.state && location.state.background

  // при закрытии модалки возвращаемся на роут, с которого её открывали (и который записан в background)
  const closeTooltip = () => {
    navigate(-1);
    // window.history.back();
  }


  return (
    <>
      {/* передавая location в Routes, мы не позволим ему использовать фактическое location, если задан background */}
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CardPage component={<TodoListDetails />} />} />

        {/* <Route path="*" element={<NotFound404Page />} /> */}
      </Routes>

      {/* когда background задан, откроет модалку (с подложкой в виде роута, записанного в background) вместо CharDetails */}
      {background &&
        <Routes>
          {/* <Route path="/reading/:id" element={ */}
          {/* <Modal header="Детали списка" onClose={closeTooltip}> */}
          {/* <TodoListDetails /> */}
          {/* </Modal> */}
          {/* } /> */}
        </Routes>
      }
    </>
  )
}

export default AppRouter;