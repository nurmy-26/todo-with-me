import { Link } from 'react-router-dom';
import cn from 'classnames';
import Typography from '../typography';
import { NavProps } from './types';
import style from './style.module.css';
import { PawIcon } from '../icons/paw-icon';


const Nav = ({ navList, extraClass, hasPaw, type = "horizontal" }: NavProps) => {
  return (
    <nav className={cn(style.nav, extraClass)}>
      <ul className={cn(style.list, style[type])}>
        {
          navList.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <Typography extraClass={style.item}>
                  {hasPaw && <PawIcon />}
                  {item.title}
                </Typography>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;