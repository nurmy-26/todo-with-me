import cn from 'classnames';
import logo from '../../../assets/images/round-icon.png';
import style from './style.module.css';
import Typography from '../../typography';
import { PawIcon } from '../../icons/paw-icon';

type LogoWithTextProps = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  extraClass?: string;
};

const LogoWithText = ({ size = 'm', extraClass }: LogoWithTextProps) => {
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
        <span>todo</span>
        <PawIcon className={style.paw} hasShadow />
        <span>with</span>
        <PawIcon className={style.paw} hasShadow />
        <span>me</span>
      </Typography>
    </div>

  );
};

export default LogoWithText;