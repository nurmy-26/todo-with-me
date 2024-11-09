import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeSidebar, ThemeToggler } from '../../../4-features';
import Logo from '../../../6-shared/ui/logo';
import { routes } from '../../../6-shared/const/routes';
import style from './style.module.css';


type AppHeaderProps = {
  extraClass?: string;
};

const AppHeader = ({ extraClass }: AppHeaderProps) => {
  return (
    <header className={cn(style.header_overlay, extraClass)}>
      <div className={style.header_grid}>
        <Link to={routes.home} className={style.logo}>
          <Logo />
        </Link>

        <ThemeSidebar />

        <ThemeToggler />
      </div>

    </header>
  )
}

export default AppHeader;