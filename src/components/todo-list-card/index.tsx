import cn from 'classnames';
import style from './style.module.css';
import ListItem from '../list-item/list-item';
import AddBtn from '../buttons/add-btn/add-btn';
import { TItem, TList } from '../../utils/mock-data';
import DeleteBtn from '../buttons/delete-btn/delete-btn';
import { useGetReadingsQuery } from '../../redux';


type TodoListCardProps = {
  title?: string;
  listId: string;
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
};

const TodoListCard = ({
  title = 'Список',
  listId,
  extraClass,
  onClick,
}: TodoListCardProps) => {
  const { data = [] } = useGetReadingsQuery(); // get-запрос к "серверу" за данными "reading"

  const listInfo: TList = data.find((list: TList) => list.id === listId);

  return listInfo ?
    (<article className={cn(style.list_container, extraClass)}>
      <DeleteBtn extraClass={style.del_btn} listId={listId} />

      <h2>{listInfo.title || title}</h2>

      {/* todo - сделать заглушку сюда, если еще не прогрузилось */}
      <ul className={style.list}>
        {listInfo["items"].map((item: TItem, index: number) =>
          <li key={index}>
            <ListItem item={item} listId={listId} />
          </li>
        )}
      </ul>

      {/* todo - перенести кнопку визуально в другое место */}
      <AddBtn onClick={onClick}>Добавить в список</AddBtn>
    </article>)
    :
    // todo - заменить на серую заглушку
    (<p>Loading...</p>)
};

export default TodoListCard;