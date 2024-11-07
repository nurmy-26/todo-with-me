import { ReactNode } from "react";
import cn from 'classnames';
import style from './style.module.css';


interface Identifiable {
  id: string;
}

// объект T должен включать свойство id: string
type ListProps<T extends Identifiable> = {
  isLoading?: boolean;
  isStubNeeded?: boolean;
  stubComponent?: ReactNode;
  skeletonLoader?: { component: ReactNode, count: number };
  data: T[]; // массив объектов для рендера
  renderItem: (item: T) => ReactNode; // ф-я получает на вход информацию об объекте и возвращает компонент
  extraClass?: string
};

const List = <T extends Identifiable,>({
  isLoading,
  isStubNeeded,
  stubComponent,
  skeletonLoader,
  data,
  renderItem,
  extraClass
}: ListProps<T>) => {
  const stub = stubComponent || null; // если заглушка не передана, на месте списка ничего не рендерится

  // если данные еще грузятся, а skeletonLoader не передан, то будет просто <p>Loading...</p>
  // todo - заменить <p>Loading...</p> на какой-то дефолтный кружок загрузки
  const listContent = isLoading ?
    !skeletonLoader ?
      (<p>Loading...</p>)
      :
      // если передан, то отрендерится skeletonLoader в нужном количестве
      (
        <ul className={cn(style.list, extraClass)}>
          {Array.from({ length: skeletonLoader.count }).map((_, index) => (
            <li key={index}>
              {skeletonLoader.component}
            </li>
          ))}
        </ul>
      )
    :
    // загрузка закончена - можно отрендерить заглушку (например, если список пуст и надо отобразить подсказку)
    (isStubNeeded ? stub : (
      // или рендерим переданный список (может быть отфильтрован на уровне выше)
      <ul className={cn(style.list, extraClass)}>
        {data.map((item) => (
          <li key={item.id}>

            {renderItem(item)}

          </li>
        ))}
      </ul>
    )
    );

  return listContent;
};

export default List;