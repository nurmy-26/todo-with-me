import cn from 'classnames';
import { ThemeSidebar, ThemeToggler } from '../../../4-features';
import Logo from '../../../6-shared/ui/logo';
import Nav from '../../../6-shared/ui/nav';
import { routes } from '../../../6-shared/const/routes';
import style from './style.module.css';
import useResponsive from '../../../6-shared/lib/useResponsive';
import LogoWithText from '../../../6-shared/ui/logo/logo-with-text.tsx';


type AppHeaderProps = {
  extraClass?: string;
};

const AppHeader = ({ extraClass }: AppHeaderProps) => {
  // todo - передавать 768 ?
  const isMobile = useResponsive(); // isMobile=true для <=550px по умолчанию

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
        {/* <Logo size={'xl'} extraClass={style.logo} /> */}
        <LogoWithText size={'l'} extraClass={style.logo} />

        <Nav navList={navList} extraClass={style.nav} />
        {isMobile ? <ThemeToggler /> : <ThemeSidebar />}
      </div>

    </header>
  )
}

export default AppHeader;