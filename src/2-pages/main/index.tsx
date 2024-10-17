import { Link, useLocation } from 'react-router-dom';
import { SkeletonLoaderCard, TodoCard } from '../../3-widgets';
import { AddTodoBtn, ThemeSelector, ThemeToggler, TodoListCreateBtn } from '../../4-features';
import { useGetTodoLists } from '../../5-entities';
import { routes } from '../../6-shared/const/routes';
import GridListLayout from '../../6-shared/ui/grid-list-layout';
import { TList } from '../../6-shared/types';
import MainPageLayout from '../../6-shared/ui/main-page-layout';


const MainPage = () => {
  const { data: todolists, isLoading } = useGetTodoLists();
  const location = useLocation();

  // сколько рендерить заглушек для карточек во время загрузки 
  // в идеале - фактическое количество; минимум 3, максимум 10 т.к. больше всё равно не видно
  const storedListsLength = Number(localStorage.getItem("todolists-length"));
  const defaultSkeletonCards = 3;
  const maxSkeletonCards = 10;
  const skeletonCards = storedListsLength !== null ?
    (storedListsLength >= maxSkeletonCards ?
      maxSkeletonCards : storedListsLength
    ) : defaultSkeletonCards;

  const renderTodoList = (list: TList) => {
    return (
      <TodoCard listInfo={list} />
    )
  }

  return (
    <MainPageLayout>
      <ThemeSelector />
      <ThemeToggler />

      <GridListLayout
        isLoading={isLoading}
        skeletonLoader={{ component: <SkeletonLoaderCard />, count: skeletonCards }}
        data={todolists}
        renderItem={renderTodoList}
        // todo - сделать из внутренностей этой секции виджет
        asideContent={
          <>
            <Link to={routes["add-new-list"]} state={{ background: location }}>
              <TodoListCreateBtn variant={'tertiary'} />
            </Link>

            <Link to={routes["add-new-item"]} state={{ background: location }}>
              <AddTodoBtn variant={'tertiary'} />
            </Link>
          </>
        }
      />
    </MainPageLayout>
  )
}

export default MainPage;