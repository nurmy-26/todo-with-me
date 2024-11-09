import cn from 'classnames';
import { THEME } from '../../../../6-shared/const/theme';
import { useTheme } from '../../model';
import style from './style.module.css';


type ThemeSidebarProps = {
  type?: 'horizontal' | 'vertical';
};

const ThemeSidebar = ({ type = 'horizontal' }: ThemeSidebarProps) => {
  const { theme: serverTheme, switchTheme } = useTheme();
  // генерируем список всех тем из перечисления THEME, чтоб менять в одном месте
  const themeList = Object.values(THEME);


  return (
    <ul className={cn(style.sidebar, type && style[type])}>

      {themeList.map((theme, index) => (
        <li key={index}>

          <label className={style.label}>
            <input
              aria-label={`Включить ${theme}-тему`}
              className={style.radio}
              type="radio"
              name={'theme'}
              value={theme}
              checked={theme === serverTheme}
              onChange={() => switchTheme(theme)}
            />

            <div
              className={cn(style.fake_radio, theme === serverTheme && style.fake_radio_checked)}
              style={{ background: `var(--body-${theme})` }}
            >
            </div>
          </label>
        </li>
      ))}

    </ul>
  );
}

export default ThemeSidebar;