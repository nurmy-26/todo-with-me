import cn from 'classnames';
import desktopLogo from './round-logo.png';
import tabletLogo from './round-logo-200.png';
import defaultLogo from './round-logo-64.png';
import style from './style.module.css';

type LogoImageProps = {
  width?: string;
  extraClass?: string;
};

const LogoImage = ({ width = '', extraClass }: LogoImageProps) => {
  const numberWidth = parseInt(width);
  const isMoreThan200px = numberWidth > 200;
  const isMoreThan64px = numberWidth > 64;
  // в зависимости от заданной ширины берем для src разные картинки
  // если width не задана - будет самая большая и растянется на весь контейнер
  const source = isMoreThan200px ? desktopLogo : isMoreThan64px ? tabletLogo : defaultLogo;

  return (
    <img
      src={width ? source : desktopLogo}
      width={width}
      height={width}
      alt='Логотип с рыжим котом'
      className={cn(
        style.logo,
        extraClass
      )}
    />
  );
};

export default LogoImage;