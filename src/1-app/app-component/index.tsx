import { BrowserRouter as Router } from 'react-router-dom';
import { AppHeader } from '../../3-widgets/app-header';
import ContentLayout from '../../6-shared/ui/content-layout';
import { AppRouter } from '../router';

const App = () => {
  return (
    <Router
      basename='/todo-with-me'
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <AppHeader />
      <ContentLayout>
        <AppRouter />
      </ContentLayout>
    </Router>
  )
}

export default App