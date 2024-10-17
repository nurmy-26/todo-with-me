import cn from 'classnames';
import style from './style.module.css';
import LogoImage from './logo-image';
import LogoText from './logo-text';
import useResponsive from '../../lib/hooks/useResponsive';

type LogoProps = {
  isAlwaysCompact?: boolean;
  extraClass?: string;
};

const Logo = ({ isAlwaysCompact, extraClass }: LogoProps) => {
  const isMobile = useResponsive(); // для <=550px по умолчанию
  const isTablet = useResponsive(768); // <=768px
  const isSmallDesktop = useResponsive(1024); // <=1024px

  const getImageWidth = () => {
    if (isMobile) return '60px'; // до 550px
    if (isTablet) return '80px'; // 550-768
    if (isSmallDesktop) return '110px'; // 768 - 1024
    return '80px'; // дефолтное значение для десктопа
  };

  return (
    <div
      className={cn(
        style.wrapper,
        extraClass
      )}
    >

      <LogoImage width={getImageWidth()} />

      {isAlwaysCompact ? (
        <LogoText type={'square'} />
      ) : (
        <LogoText type={isSmallDesktop ? 'square' : 'line'} />
      )}
    </div>
  );
};

export default Logo;