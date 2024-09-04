import { useRoutes } from 'react-router-dom';
import { modalRoutesConfig, routesConfig } from './routes-config';
import Modal from '../../3-widgets/modal/ui';
import { useRouterLocation } from '../../6-shared/lib/useRouterLocation';


const AppRouter = () => {
  const { background, location, returnToPreviousPage } = useRouterLocation();
  // передавая location в Routes, мы не позволим ему использовать фактическое location, если задан background
  const routesElement = useRoutes(routesConfig, background || location);
  const modalRoutesElement = useRoutes(modalRoutesConfig);

  return (
    <>
      {/* основные роуты */}
      {routesElement}

      {/* когда background задан, откроет модалку (с подложкой в виде роута, записанного в background) */}
      {background && (
        <Modal onClose={returnToPreviousPage}>{modalRoutesElement}</Modal>
      )}
      {/* {background &&
        <Routes>
          <Route path="/:id" element={
            <Modal onClose={returnToPreviousPage}>
              <TodoModalDetails />
            </Modal>
          } />
        </Routes>
      } */}
    </>
  )
}

export default AppRouter;