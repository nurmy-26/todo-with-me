import { THEME } from '../../../../6-shared/const/theme';
import { useTheme } from '../../model';
import Select from '../../../../6-shared/ui/select';


const ThemeSelector = () => {
  const { theme: serverTheme, switchTheme } = useTheme();
  // генерируем объект всех тем из перечисления THEME, чтоб менять в одном месте
  const themeList = Object.values(THEME).map((theme) => ({
    id: theme,
    title: theme.charAt(0).toUpperCase() + theme.slice(1), // 'light' -> 'Light'
  }));


  return (
    <Select
      aria-label={"Выбрать тему"}
      name={'theme'}
      value={serverTheme}
      options={themeList}
      onChange={(e) => switchTheme(e.target.value as THEME)}
    />
  );
}

export default ThemeSelector;
