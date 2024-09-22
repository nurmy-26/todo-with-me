import cn from 'classnames';
import style from './style.module.css';
import Logo from '../../../6-shared/ui/logo';
import Typography from '../../../6-shared/ui/typography';
import { routes } from '../../../6-shared/const/routes';
import { Link } from 'react-router-dom';

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
  ]
  return (
    <header className={cn(style.app_header, extraClass)}>
      <div className={style.overlay}>
        <Logo size={'xl'} extraClass={style.logo} />

        <nav className={style.nav}>
          <ul className={style.list}>
            {
              navList.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>
                    <Typography extraClass={style.item}>
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default AppHeader;