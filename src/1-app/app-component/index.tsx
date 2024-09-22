import { BrowserRouter as Router } from 'react-router-dom';
import { AppHeader } from '../../3-widgets/app-header';
import MainLayout from '../../6-shared/ui/main-layout';
import { AppRouter } from '../router';

const App = () => {
  return (
    <Router>
      <AppHeader />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Router>
  )
}

export default App