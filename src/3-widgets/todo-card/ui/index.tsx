import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { AddTodoForm } from '../../../4-features';
import { useGetTodoLists } from '../../../5-entities';
import { TItem, TList } from '../../../6-shared/types';
import Typography from '../../../6-shared/ui/typography';
import { getFormattedDate } from '../lib/getFormattedDate';
import TodolistDropdownMenu from './dropdown-menu';
import SkeletonLoaderCard from './skeleton-loader-card';
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
  const { id } = useParams(); // извлекаем id из url
  const { data, isLoading, isError } = useGetTodoLists();

  // для модалки и отдельной страницы - загружаем инфо карточки из общей базы по id (полученному из url)
  const loadedListInfo: TList = data.find((item: TItem) => item.id === id);
  // для карточки инфо передается из данных родителя (списка карточек)
  const list = type === 'card' ? listInfo : loadedListInfo;

  if (isLoading) {
    return <SkeletonLoaderCard type={type} />;
  }

  if (isError || !list) {
    return <Typography>Error!</Typography>
  }

  // todo - менять тип формата из настроек
  const creationDate = getFormattedDate(list.creationDate, 'short'); // "narrow" | "short" | "long"


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
          <TodolistDropdownMenu listId={list.id} type={type} />
        </div>
      </header>

      {type !== 'card' && <Typography extraClass={style.date}>{creationDate}</Typography>}

      <TodoList list={list} type={type} extraClass={style.article_list} />

      <AddTodoForm listTitle={list.title} extraClass={cn(style.todo_btn, style[`todo_btn_${type}`])} />
    </article>
  )
};

export default TodoCard;