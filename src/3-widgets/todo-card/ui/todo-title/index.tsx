import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';
import Typography from "../../../../6-shared/ui/typography";
import { routes } from "../../../../6-shared/const/routes";
import style from './style.module.css';


type TodoTitleProps = {
  listId: string;
  listTitle: string;
  extraClass?: string;
  type: 'card' | 'modal' | 'page';
};

const TodoTitle = ({
  listId,
  listTitle,
  extraClass,
  type,
}: TodoTitleProps) => {
  const location = useLocation();
  // у page тег h1 вместо h2
  const headerTitle = <Typography type={type === 'page' ? 'h1' : 'h2'} extraClass={cn(style.title, extraClass)}>{listTitle}</Typography>;

  return type === 'card' ? (
    // заголовок карточки h1 рендерится со ссылкой на отдельную страницу
    <Link to={`${routes.todolists.todolists}/${listId}`} state={{ background: location }}>
      {headerTitle}
    </Link>
  ) : (
    // остальные рендерятся без ссылки
    headerTitle
  );
};

export default TodoTitle;