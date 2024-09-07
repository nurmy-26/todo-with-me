import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App, store } from './1-app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
