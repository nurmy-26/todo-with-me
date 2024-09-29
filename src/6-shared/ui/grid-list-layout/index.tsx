import { ReactNode } from "react";
import cn from "classnames";
import style from './style.module.css';

interface Identifiable {
  id: string;
}

// объект T должен включать свойство id: string
type GridListLayoutProps<T extends Identifiable> = {
  data: T[]; // массив объектов для рендера
  renderItem: (item: T) => ReactNode; // ф-я получает на вход информацию об объекте и возвращает компонент
  asideContent?: ReactNode;
  asideType?: 'left' | 'right';
  extraClass?: string
};

const GridListLayout = <T extends Identifiable,>({
  data,
  renderItem,
  asideContent,
  // расположение сайд-бара слева/справа
  asideType = 'left',
  extraClass,
}: GridListLayoutProps<T>) => {
  const listContent = (
    <ul className={cn(style.list, extraClass)}>
      {data.map((item) => (
        <li key={item.id} className={style.list_item}>

          {renderItem(item)}

        </li>
      ))}
    </ul>
  );

  const aside = (
    <aside className={style.aside}>
      {asideContent}
    </aside>
  );


  return asideContent ?
    (
      <section aria-label={"Мои списки"} className={cn(style.wrapper, extraClass)}>
        {asideType === 'left' && aside}

        {listContent}

        {asideType === 'right' && aside}
      </section>
    )
    :
    listContent
};

export default GridListLayout;