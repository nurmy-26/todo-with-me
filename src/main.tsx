import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './components/app/app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
