import cn from 'classnames';
import Button from '../../../../6-shared/ui/button';
import { MoonIcon } from '../../../../6-shared/ui/icons/moon-icon';
import { SunIcon } from '../../../../6-shared/ui/icons/sun-icon';
import { THEME } from '../../../../6-shared/const/theme';
import { useTheme } from '../../model';
import style from './style.module.css';


// todo - переделать стили и визуал !! сейчас это просто дубль ThemeToggler
// type ThemeSelectorProps = {
// };

const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme();

  const type = 'horizontal';

  return (
    <div
      className={cn(style.wrapper, style[type])}
      onClick={toggleTheme}
    >
      <Button
        size={'s'}
        shape={'rounded'}
        variant={'primary'}
        extraClass={cn(style.theme_btn, theme === THEME.LIGHT ? style.btn_light : style.btn_dark)}
      />

      <SunIcon className={style.icon} />
      <MoonIcon className={style.icon} isDark />
    </div>
  );
}

export default ThemeSelector;