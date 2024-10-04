import { THEME } from '../../../../6-shared/const/theme';
import { useTheme } from '../../model';
import Select from '../../../../6-shared/ui/select';


const ThemeSelector = () => {
  const { theme: serverTheme, switchTheme } = useTheme();
  // генерируем список всех тем из перечисления THEME, чтоб менять в одном месте
  const themeList = Object.values(THEME);


  return (
    <Select
      name={'theme'}
      value={serverTheme}
      options={themeList}
      onChange={(e) => switchTheme(e.target.value as THEME)}
    />
  );
}

export default ThemeSelector;
