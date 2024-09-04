import cn from "classnames";
import style from './style.module.css';

interface Identifiable {
  id: string;
}

// объект T должен включать свойство id: string
type GridListLayoutProps<T extends Identifiable> = {
  data: T[]; // массив объектов для рендера
  renderItem: (item: T) => React.ReactNode; // ф-я получает на вход информацию об объекте и возвращает компонент
  extraClass?: string
};

const GridListLayout = <T extends Identifiable,>({
  data,
  renderItem,
  extraClass,
}: GridListLayoutProps<T>) => {
  return (
    <ul className={cn(style.list, extraClass)}>
      {data.map((item) => (
        <li key={item.id} className={style.list_item}>

          {renderItem(item)}

        </li>
      ))}
    </ul>
  );
};

export default GridListLayout;