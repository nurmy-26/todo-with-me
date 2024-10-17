import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { PawIcon } from '../icons/paw-icon';
import Typography from '../typography';
import { NavProps } from './types';
import style from './style.module.css';

const Nav = ({ navList, extraClass, hasPaw, type = "horizontal" }: NavProps) => {
  const setActive = ({ isActive }: { isActive: boolean }) => cn(style.link, (isActive ? style.active_link : ''));

  return (
    <nav className={cn(style.nav, extraClass)}>
      <ul className={cn(style.list, style[type])}>
        {
          navList.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className={setActive}>
                <Typography extraClass={style.item}>
                  {hasPaw && <PawIcon />}
                  {item.title}
                </Typography>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;