import { Link, useLocation } from 'react-router-dom';
import { TodoCard } from '../../3-widgets';
import { AddTodoBtn, ThemeSelector, ThemeToggler, TodoListCreateBtn } from '../../4-features';
import { useGetTodoLists } from '../../5-entities';
import { routes } from '../../6-shared/const/routes';
import GridListLayout from '../../6-shared/ui/grid-list-layout';
import Typography from '../../6-shared/ui/typography';
import { TList } from '../../6-shared/types';
import style from './style.module.css';
import MainPageLayout from '../../6-shared/ui/main-page-layout';


const MainPage = () => {
  const { data: todolists, isLoading } = useGetTodoLists();
  const location = useLocation();

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  const renderTodoList = (list: TList) => {
    return (
      <TodoCard listInfo={list} />
    )
  }

  return (
    <MainPageLayout>
      <ThemeSelector />
      <ThemeToggler />
      {/* todo - сделать компонент заголовка Title чтоб не задавать стили тут ? */}
      <Typography type={'h1'} extraClass={style.header}>Тестовая версия</Typography>

      <GridListLayout
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