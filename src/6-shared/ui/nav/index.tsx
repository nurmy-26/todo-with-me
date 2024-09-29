import { Link } from 'react-router-dom';
import cn from 'classnames';
import Typography from '../typography';
import { NavProps } from './types';
import style from './style.module.css';


const Nav = ({ navList, extraClass, hasPow, type = "horizontal" }: NavProps) => {
  return (
    <nav className={cn(style.nav, extraClass)}>
      <ul className={cn(style.list, style[type], hasPow && style.hasPow)}>
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
  );
};

export default Nav;