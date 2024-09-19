import { Link, useLocation } from "react-router-dom";
// import cn from 'classnames';
import Typography from "../../../../6-shared/ui/typography";
import { routes } from "../../../../6-shared/const/routes";
// import style from './style.module.css';


type TodoHeaderProps = {
  listId: string;
  listTitle: string;
  extraClass?: string;
  type: 'card' | 'modal' | 'page';
};

const TodoHeader = ({
  listId,
  listTitle,
  extraClass,
  type,
}: TodoHeaderProps) => {
  const location = useLocation();
  const headerTitle = <Typography type={type === 'page' ? 'h1' : 'h2'} extraClass={extraClass}>{listTitle}</Typography>;

  return type === 'card' ? (
    // заголовок карточки h1 рендерится со ссылкой на отдельную страницу
    <Link to={`${routes.todolist}/${listId}`} state={{ background: location }}>
      {headerTitle}
    </Link>
  ) : (
    // остальные рендерятся без ссылки (у page - h1 вместо h2)
    headerTitle
  );
};

export default TodoHeader;