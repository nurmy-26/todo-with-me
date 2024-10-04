import { useEffect, useState } from 'react';
import cn from 'classnames';
import style from './style.module.css';
import Button from '../../../../6-shared/ui/button';
import { MoonIcon } from '../../../../6-shared/ui/icons/moon-icon';
import { SunIcon } from '../../../../6-shared/ui/icons/sun-icon';


type ThemeTogglerProps = {
  type?: 'horizontal' | 'vertical';
};

const ThemeToggler = ({ type = 'horizontal' }: ThemeTogglerProps) => {
  // todo - ? получать тему в InitialState из настроек ?
  const [isLight, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!isLight);
    // при каждом изменении обновлять настройки
  };

  // todo - вынести это из компонента в model (хук useTheme) и поменять логику! (менять data-theme у body)
  // useEffect(() => {
  //   const root = document.documentElement;
  //   // меняем с помощью переменных
  //   // todo - менять класс в css ? и в зависимости от выбранного класса в body разные значения переменных
  //   if (isLight === true) {
  //     // светлые стили
  //     root.style.setProperty('--color-text-primary', 'var(--color-text-dark)');
  //     root.style.setProperty('--color-background', 'var(--color-light)');
  //     root.style.setProperty('--color-accent', 'var(--accent-warm)');
  //     root.style.setProperty('--color-accent-hover', 'var(--accent-warm-hover)');
  //     root.style.setProperty('--color-error', 'var(--error-warm)');

  //     root.style.setProperty('--background-base', 'var(--background-base-warm)');
  //     root.style.setProperty('--card-overlay', 'var(--card-overlay-light)');
  //     root.style.setProperty('--body-color', 'var(--body-warm)');
  //     root.style.setProperty('--color-overlay', 'var(--overlay-light)');
  //     root.style.setProperty('--color-secondary', 'var(--secondary-light)');
  //     root.style.setProperty('--color-secondary-hover', 'var(--secondary-hover-light)');
  //     root.style.setProperty('--color-secondary-background', 'var(--secondary-background-light)');
  //   } else {
  //     // темные стили
  //     root.style.setProperty('--color-text-primary', 'var(--color-light-purple)');
  //     root.style.setProperty('--color-background', 'var(--color-text-dark)');
  //     root.style.setProperty('--color-accent', 'var(--accent-default)');
  //     root.style.setProperty('--color-accent-hover', 'var(--accent-default-hover)');
  //     root.style.setProperty('--color-error', 'var(--error-default)');

  //     root.style.setProperty('--background-base', 'var(--background-base-night)');
  //     root.style.setProperty('--card-overlay', 'var(--card-overlay-dark)');
  //     root.style.setProperty('--body-color', 'var(--body-night)');
  //     root.style.setProperty('--color-overlay', 'var(--overlay-dark)');
  //     root.style.setProperty('--color-secondary', 'var(--secondary-dark)');
  //     root.style.setProperty('--color-secondary-hover', 'var(--secondary-hover-dark)');
  //     root.style.setProperty('--color-secondary-background', 'var(--secondary-background-dark)');
  //   }
  // }, [isLight]);

  return (
    <div
      className={cn(style.wrapper, style[type])}
      onClick={toggleTheme}
    >
      <Button
        size={'s'}
        shape={'rounded'}
        variant={'primary'}
        extraClass={cn(style.theme_btn, isLight ? style.btn_light : style.btn_dark)}
      />

      <SunIcon className={style.icon} />
      <MoonIcon className={style.icon} isDark />
    </div>
  );
}

export default ThemeToggler;