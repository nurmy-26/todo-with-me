import cn from 'classnames';
import logo from '../../assets/images/logo.png';
import style from './style.module.css';

type LogoProps = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  extraClass?: string;
};

const Logo = ({ size = 'm', extraClass }: LogoProps) => {
  return (
    <img
      src={logo}
      alt='логотип'
      className={cn(
        style.logo,
        style[size],
        extraClass
      )}
    />
  );
};

export default Logo;