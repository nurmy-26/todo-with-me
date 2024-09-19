import { useRoutes } from 'react-router-dom';
import { modalRoutesConfig, routesConfig } from './routes-config';
import { useRouterLocation } from '../../6-shared/lib/useRouterLocation';
import Modal from '../../6-shared/ui/modal';


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
    </>
  )
}

export default AppRouter;