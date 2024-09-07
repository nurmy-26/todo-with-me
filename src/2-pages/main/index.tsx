import { Link } from 'react-router-dom';
import { ItemForm, ListForm, TodoCard } from '../../3-widgets';
import { useGetTodoLists } from '../../5-entities';
import { useRouterLocation } from '../../6-shared/lib/useRouterLocation';
import GridSection from '../../6-shared/ui/grid-section';
import GridListLayout from '../../6-shared/ui/grid-list-layout';
import { routes } from '../../6-shared/const/routes';
import { TList } from '../../6-shared/types';
import style from './style.module.css';


const MainPage = () => {
  const { data: todolists, isLoading } = useGetTodoLists();
  const { location } = useRouterLocation();

  if (isLoading) {
    return <p>Loading...</p>
  }

  const renderTodoList = (list: TList) => {
    return (
      // <Link to={`/${list.id}`} state={{ background: location }}>
      //   <TodoCard listInfo={list} />
      // </Link>
      <Link to={`${routes.todolist}/${list.id}`} state={{ background: location }}>
        <TodoCard listInfo={list} />
      </Link>
    )
  }

  return (
    <>
      {/* todo - сделать компонент заголовка чтоб не задавать стили тут */}
      <h1 className={style.header}>Читальные планы</h1>
      <GridSection ariaLabel='Добавление и дополнение списков'>
        <ListForm />

        <ItemForm />
      </GridSection>

      {/* <GridSection ariaLabel='Настройки'> </GridSection> */}

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