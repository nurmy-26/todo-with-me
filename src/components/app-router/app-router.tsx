import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages';
import CardPage from '../../pages/card';
import TodoPageDetails from '../todo-entity/todo-page-details';
import TodoModalDetails from '../todo-entity/todo-modal-details';
import Modal from '../modal';


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
        <Route path="/:id" element={<CardPage component={<TodoPageDetails />} />} />

        {/* <Route path="*" element={<NotFound404Page />} /> */}
      </Routes>

      {/* когда background задан, откроет модалку (с подложкой в виде роута, записанного в background) вместо CharDetails */}
      {background &&
        <Routes>
          <Route path="/:id" element={
            <Modal onClose={closeTooltip}>
              <TodoModalDetails />
            </Modal>
          } />
        </Routes>
      }
    </>
  )
}

export default AppRouter;