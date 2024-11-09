import { Route, Routes, useRoutes } from 'react-router-dom';
import { routesConfig } from './routes-config';
import {
  DeleteListConfirmation,
  ItemForm,
  ListForm,
  ResetTodolistsConfirmation,
  TodoCard
} from '../../3-widgets';
import { useRouterLocation } from '../../6-shared/lib/hooks/useRouterLocation';
import Modal from '../../6-shared/ui/modal';
import { routes } from '../../6-shared/const/routes';


const AppRouter = () => {
  const { background, location, returnToPreviousPage, returnToHomePage } = useRouterLocation();
  // передавая location в Routes, мы не позволим ему использовать фактическое location, если задан background
  const routesElement = useRoutes(routesConfig, background || location);

  return (
    <>
      {/* основные роуты */}
      {routesElement}

      {/* когда background задан, откроет модалку (с подложкой в виде роута, записанного в background) */}
      {background &&
        <Routes>

          <Route path={`${routes.todolists.todolists}/:id`} element={
            <Modal position={'right'} onClose={returnToPreviousPage}>
              <TodoCard type={'modal'} />
            </Modal>
          } />

          <Route path={`${routes.todolists.deleteList}/:id`} element={
            <Modal onClose={returnToPreviousPage}>
              <DeleteListConfirmation />
            </Modal>
          } />

          <Route path={routes.forms.addList} element={
            <Modal position={'left'} onClose={returnToPreviousPage}>
              <ListForm />
            </Modal>
          } />

          <Route path={routes.forms.addItem} element={
            <Modal position={'left'} onClose={returnToPreviousPage}>
              <ItemForm />
            </Modal>
          } />

          <Route path={routes.todolists.resetAllListsConfirmation} element={
            <Modal onClose={returnToPreviousPage}>
              <ResetTodolistsConfirmation step={'first'} />
            </Modal>
          } />

          <Route path={routes.todolists.resetAllLists} element={
            <Modal onClose={returnToHomePage}>
              <ResetTodolistsConfirmation step={'second'} />
            </Modal>
          } />
        </Routes>
      }
    </>
  )
}

export default AppRouter;