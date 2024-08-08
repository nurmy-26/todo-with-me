import { BrowserRouter as Router } from 'react-router-dom';
import cn from 'classnames';
import styles from './app.module.css';
import Header from '../header/header';
import { MainPage } from '../../pages';
import AppRouter from '../app-router/app-router';

// todo - иконки "переместить" и "копировать" при наведении на каждый пункт (id остается тем же)
// если отмечается в одном списке - отмечается везде

// todo - отдельно сделать эмодзи (от 1 до 3 штук перед названием), отдельно - теги (например, по именам советчиков, активности и тд)

// todo - сделать в правом углу списка троеточие и выпадающий список (удалить, редактировать, ...)

const App = () => {
  const nav = ['Пунктик 1', 'Пунктик 2', 'Пунктик 3', 'Пунктик 4'];

  return (
    <Router>
      <Header navList={nav} />
      <main className={cn(styles.main, styles.grid)}>

        {/* todo - заменить на AppRouter когда всё будет готово */}
        <AppRouter />

        {/* <MainPage /> */}

      </main >
    </Router>
  )
}

export default App
