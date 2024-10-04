import cn from 'classnames';
import Button from '../../../../6-shared/ui/button';
import { MoonIcon } from '../../../../6-shared/ui/icons/moon-icon';
import { SunIcon } from '../../../../6-shared/ui/icons/sun-icon';
import { THEME } from '../../../../6-shared/const/theme';
import { useTheme } from '../../model';
import style from './style.module.css';


type ThemeTogglerProps = {
  type?: 'horizontal' | 'vertical';
};

const ThemeToggler = ({ type = 'horizontal' }: ThemeTogglerProps) => {
  const { theme, toggleTheme } = useTheme();
  // ползунок в положении для светлой темы, если тема light или warm; иначе - для темной
  const isLight = theme === THEME.LIGHT || theme === THEME.WARM;


  return (
    <div
      className={cn(style.wrapper, style[type])}
      onClick={toggleTheme}
    >
      <Button
        size={'s'}
        shape={'rounded'}
        variant={'primary'}
        extraClass={cn(style.theme_btn, (isLight ? style.btn_light : style.btn_dark))}
      />

      <SunIcon className={style.icon} />
      <MoonIcon className={style.icon} isDark />
    </div>
  );
}

export default ThemeToggler;