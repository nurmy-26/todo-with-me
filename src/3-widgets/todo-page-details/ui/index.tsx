import { Link, useParams } from 'react-router-dom';
import { DeleteListBtn, TodoAddForm } from '../../../4-features';
import { useGetTodoLists } from '../../../5-entities';
import { routes } from '../../../6-shared/const/routes';
import { useRouterLocation } from '../../../6-shared/lib/useRouterLocation';
import Typography from '../../../6-shared/ui/typography';
import { TItem, TList } from '../../../6-shared/types';
import TodoList from '../../todo-list/ui';
import style from './style.module.css';


const TodoPageDetails = () => {
  const { location } = useRouterLocation();
  const { id } = useParams(); // извлекаем id из url
  const { data, isLoading } = useGetTodoLists();

  // todo - доделать, убрать лишнее
  if (!id) {
    return null
  }

  const listInfo: TList = data.find((item: TItem) => item.id === id);
  console.log(listInfo)

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!listInfo) {
    return <Typography>Error!</Typography>
  }

  return (
    <article className={style.content}>
      <header className={style.header}>
        <Typography type={'h1'} extraClass={''}>{listInfo.title}</Typography>

        <Link to={`${routes.delete}/${listInfo.id}`} state={{ background: location }}>
          <DeleteListBtn extraClass={style.del_btn} />
        </Link>
      </header>

      <TodoAddForm listTitle={listInfo.title} />

      <TodoList list={listInfo} extraClass={style.content_list} />
    </article>
  );
};

export default TodoPageDetails;