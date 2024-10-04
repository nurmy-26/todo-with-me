import cn from 'classnames';
import { ThemeToggler } from '../../../4-features';
import Logo from '../../../6-shared/ui/logo';
import Nav from '../../../6-shared/ui/nav';
import { routes } from '../../../6-shared/const/routes';
import style from './style.module.css';


type AppHeaderProps = {
  extraClass?: string;
};

const AppHeader = ({ extraClass }: AppHeaderProps) => {
  // todo - вынести в константу в shared, когда появится стабильное меню навигации
  const navList = [
    {
      title: 'Главная',
      path: routes.home
    },
    {
      title: '404',
      path: '12345'
    },
    {
      title: 'Настройки',
      path: '12345'
    },
  ]

  return (
    <header className={cn(style.app_header, extraClass)}>
      <div className={style.overlay}>
        <Logo size={'xl'} extraClass={style.logo} />

        <Nav navList={navList} extraClass={style.nav} />
        {/* <ThemeToggler /> */}
      </div>

    </header>
  )
}

export default AppHeader;