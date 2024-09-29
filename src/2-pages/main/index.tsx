import { Link, useLocation } from 'react-router-dom';
import { TodoCard } from '../../3-widgets';
import { AddTodoBtn, TodoListCreateBtn } from '../../4-features';
import { useGetTodoLists } from '../../5-entities';
import { routes } from '../../6-shared/const/routes';
import GridSection from '../../6-shared/ui/grid-section';
import GridListLayout from '../../6-shared/ui/grid-list-layout';
import Typography from '../../6-shared/ui/typography';
import { TList } from '../../6-shared/types';
import style from './style.module.css';


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
    <>
      {/* todo - сделать компонент заголовка Title чтоб не задавать стили тут ? */}
      <Typography type={'h1'} extraClass={style.header}>Тестовая версия</Typography>


      {/* todo - сделать из внутренностей этой секции виджет настроек */}
      <GridSection ariaLabel='Формы'>
        <Link to={routes["add-new-list"]} state={{ background: location }} className={style.btn}>
          <TodoListCreateBtn />
        </Link>

        <Link to={routes["add-new-item"]} state={{ background: location }} className={style.btn}>
          <AddTodoBtn />
        </Link>
      </GridSection>

      <GridSection ariaLabel='Списки'>
        <GridListLayout
          data={todolists}
          renderItem={renderTodoList}
        />
      </GridSection>
    </>
  )
}

export default MainPage;