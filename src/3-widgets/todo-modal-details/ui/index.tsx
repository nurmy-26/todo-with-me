import { Link, useParams } from 'react-router-dom';
import TodoList from '../../todo-list/ui';
import { DeleteListBtn, TodoAddForm } from '../../../4-features';
import { useGetTodoLists } from '../../../5-entities';
import { routes } from '../../../6-shared/const/routes';
import Typography from '../../../6-shared/ui/typography';
import { TItem, TList } from '../../../6-shared/types';
import style from './style.module.css';


const TodoModalDetails = () => {
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
        <Typography type={'h2'}>{listInfo.title}</Typography>
      </header>

      <TodoList list={listInfo} extraClass={style.content_list} />

      <footer className={style.footer}>
        <TodoAddForm listTitle={listInfo.title} />

        {/* routes.home нужен, т.к. иначе location считывает как todolists/:id и отображает CardPage и изображение прыгает */}
        <Link to={`${routes.delete}/${listInfo.id}`} state={{ background: routes.home }}>
          <DeleteListBtn extraClass={style.del_btn} />
        </Link>
      </footer>
    </article>
  );
};

export default TodoModalDetails;