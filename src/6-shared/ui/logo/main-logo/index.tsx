import cn from 'classnames';
import logo from '../../../assets/images/round-icon.png';
import style from './style.module.css';
import Typography from '../../typography';
import { PawIcon } from '../../icons/paw-icon';

type MainLogoProps = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  extraClass?: string;
};

const MainLogo = ({ size = 'm', extraClass }: MainLogoProps) => {
  return (
    <div className={cn(style.wrapper, extraClass)}>
      <img
        src={logo}
        alt='логотип'
        className={cn(
          style.logo,
          style[size]
        )}
      />

      <Typography type={'h1'} extraClass={style.text}>
        <span className={style.todo}>todo</span>
        <PawIcon className={cn(style.paw, style.paw_1)} hasShadow />
        <span className={style.with}>with</span>
        <PawIcon className={cn(style.paw, style.paw_2)} hasShadow />
        <span className={style.me}>me</span>
      </Typography>
    </div>

  );
};

export default MainLogo;