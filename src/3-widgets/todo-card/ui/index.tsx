import cn from 'classnames';
import { Link, useLocation, useParams } from 'react-router-dom';
import { DeleteListBtn, AddTodoForm } from '../../../4-features';
import { useGetTodoLists } from '../../../5-entities';
import { TItem, TList } from '../../../6-shared/types';
import { routes } from '../../../6-shared/const/routes';
import Typography from '../../../6-shared/ui/typography';
import DropdownList from '../../../6-shared/ui/dropdown-list';
import TodoList from './todo-list';
import TodoTitle from './todo-title';
import style from './style.module.css';


type TodoCardProps = {
  listInfo?: TList;
  extraClass?: string;
  type?: 'card' | 'modal' | 'page';
};

const TodoCard = ({
  listInfo,
  extraClass,
  type = 'card'
}: TodoCardProps) => {
  const location = useLocation();
  const { id } = useParams(); // извлекаем id из url
  const { data, isLoading } = useGetTodoLists();

  // для модалки и отдельной страницы - загружаем инфо карточки из общей базы по id (полученному из url)
  const loadedListInfo: TList = data.find((item: TItem) => item.id === id);
  // для карточки инфо передается из данных родителя (списка карточек)
  const list = type === 'card' ? listInfo : loadedListInfo;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!list) {
    return <Typography>Error!</Typography>
  }

  // пункты выпадающего списка
  const dropdownMenuComponents = [
    // todo - перенести в фичу весь этот отрезок? (вместе с Link)
    // переход на подтверждение удаления
    <Link
      to={`${routes.delete}/${list.id}`}
      // routes.home нужен, т.к. иначе location считывает как todolists/:id и отображает CardPage и изображение прыгает
      state={{ background: (type === 'modal' ? routes.home : location) }}
    >
      <DeleteListBtn size={'m'} />
    </Link>,
    <span>Пункт 2</span>
  ]


  return (
    <article
      id={list.id}
      className={cn(
        style.article,
        style[type],
        extraClass
      )}>
      <header className={style.header}>
        <TodoTitle type={type} listId={list.id} listTitle={list.title} />

        <div className={style.menu} >
          <DropdownList list={dropdownMenuComponents} />
        </div>
      </header>

      <TodoList list={list} type={type} />

      <AddTodoForm listTitle={list.title} extraClass={cn(style.todo_btn, style[`todo_btn_${type}`])} />
    </article>
  )
};

export default TodoCard;