import cn from 'classnames';
import { Link } from 'react-router-dom';
import TodoList from '../../todo-list/ui';
import { DeleteListBtn, TodoAddForm } from '../../../4-features';
import { TList } from '../../../6-shared/types';
import { routes } from '../../../6-shared/const/routes';
import Typography from '../../../6-shared/ui/typography';
import { useRouterLocation } from '../../../6-shared/lib/useRouterLocation';
import style from './style.module.css';


type TodoCardProps = {
  title?: string;
  listInfo: TList;
  extraClass?: string;
};

const TodoCard = ({
  title = 'Список',
  listInfo,
  extraClass,
}: TodoCardProps) => {
  const { location } = useRouterLocation();

  return (
    <article className={cn(style.card, extraClass)}>
      {/* переход на подтверждение удаления */}
      <Link to={`${routes.delete}/${listInfo.id}`} state={{ background: location }}>
        <DeleteListBtn extraClass={style.del_btn} />
      </Link>

      <Link to={`${routes.todolist}/${listInfo.id}`} state={{ background: location }}>
        <Typography type={'h2'}>{listInfo.title || title}</Typography>
      </Link>

      <TodoList list={listInfo} />

      <TodoAddForm listTitle={listInfo.title} />
    </article>
  )
};

export default TodoCard;