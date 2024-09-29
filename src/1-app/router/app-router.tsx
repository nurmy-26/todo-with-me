import { Route, Routes, useRoutes } from 'react-router-dom';
import { modalRoutesConfig, routesConfig } from './routes-config';
import { useRouterLocation } from '../../6-shared/lib/useRouterLocation';
import Modal from '../../6-shared/ui/modal';
import { routes } from '../../6-shared/const/routes';
import { DeleteListDetails, ItemForm, ListForm, TodoCard } from '../../3-widgets';


const AppRouter = () => {
  const { background, location, returnToPreviousPage } = useRouterLocation();
  // передавая location в Routes, мы не позволим ему использовать фактическое location, если задан background
  const routesElement = useRoutes(routesConfig, background || location);
  // const modalRoutesElement = useRoutes(modalRoutesConfig);

  return (
    <>
      {/* основные роуты */}
      {routesElement}

      {/* todo - привести в порядок */}
      {/* когда background задан, откроет модалку (с подложкой в виде роута, записанного в background) */}
      {/* {background && (
        <Modal onClose={returnToPreviousPage}>{modalRoutesElement}</Modal>
      )} */}

      {background &&
        <Routes>
          <Route path={`${routes.todolist}/:id`} element={
            <Modal position={'right'} onClose={returnToPreviousPage}>
              <TodoCard type={'modal'} />
            </Modal>
          } />

          <Route path={`${routes.delete}/:id`} element={
            <Modal onClose={returnToPreviousPage}>
              <DeleteListDetails />
            </Modal>
          } />

          <Route path={routes['add-new-list']} element={
            <Modal position={'left'} onClose={returnToPreviousPage}>
              <ListForm />
            </Modal>
          } />

          <Route path={routes['add-new-item']} element={
            <Modal position={'left'} onClose={returnToPreviousPage}>
              <ItemForm />
            </Modal>
          } />
        </Routes>
      }
    </>
  )
}

export default AppRouter;