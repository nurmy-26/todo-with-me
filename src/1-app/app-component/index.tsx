import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from '../../6-shared/ui/main-layout';
import { AppRouter } from '../router';
// import styles from './app.module.css';

// import Header from '../header/header';

const App = () => {
  return (
    <Router>
      <MainLayout>
        {/* виджет Header */}

        <AppRouter />
      </MainLayout>
    </Router>
  )
}

export default App