import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeSidebar, ThemeToggler } from '../../../4-features';
import Logo from '../../../6-shared/ui/logo';
import Nav from '../../../6-shared/ui/nav';
import useResponsive from '../../../6-shared/lib/hooks/useResponsive';
import { routes } from '../../../6-shared/const/routes';
import style from './style.module.css';


type AppHeaderProps = {
  extraClass?: string;
};

const AppHeader = ({ extraClass }: AppHeaderProps) => {
  const isMobile = useResponsive(); // isMobile=true для <=550px по умолчанию

  // todo - вынести в константу?, если вообще  будет стабильное меню навигации
  const navList = [
    {
      title: 'Главная',
      path: '/'
    },
    {
      title: 'Идеи для списка',
      path: '12345'
    },
    {
      title: 'Настройки',
      path: '12345'
    },
  ]

  return (
    <header className={cn(style.header_overlay, extraClass)}>
      <div className={style.header_grid}>
        <Link to={routes.home} className={style.logo}>
          <Logo />
        </Link>

        <Nav navList={navList} extraClass={style.nav} />
        {isMobile ? <ThemeToggler /> : <ThemeSidebar />}
      </div>

    </header>
  )
}

export default AppHeader;