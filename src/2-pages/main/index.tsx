import style from './style.module.css';
import { useRouterLocation } from '../../6-shared/lib/useRouterLocation';
import GridSection from '../../6-shared/ui/grid-section';
import GridListLayout from '../../6-shared/ui/grid-list-layout';
import { useGetTodoLists } from '../../5-entities/Todo/model';
import TodoCard from '../../3-widgets/todo-card/ui';
import { Link } from 'react-router-dom';
import { TList } from '../../5-entities/Todo/model/types';
import ListForm from '../../3-widgets/list-form/ui';
import ItemForm from '../../3-widgets/item-form/ui';
import { routes } from '../../6-shared/const/routes';


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