import cn from 'classnames';
import style from './style.module.css';
import ListItem from '../list-item/list-item';
import AddBtn from '../buttons/add-btn/add-btn';
import { TItem } from '../../utils/mock-data';
import DeleteBtn from '../buttons/delete-btn/delete-btn';
import { MouseEventHandler } from 'react';


type TodoListCardProps = {
  title?: string;
  listId: string;
  extraClass?: string;
  list?: TItem[];
  onClick?: (event: React.FormEvent) => void;
  handleDeleteItem: (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listTitle: string) => Promise<void>;
  handleDeleteList: MouseEventHandler<HTMLButtonElement>;
};

const TodoListCard = ({
  title = 'Список',
  listId, extraClass,
  list = [],
  onClick,
  handleDeleteItem,
  handleDeleteList
}: TodoListCardProps) => {
  return (
    <article className={cn(style.list_container, extraClass)}>
      <DeleteBtn extraClass={style.del_btn} handleDeleteList={handleDeleteList} />

      <h2>{title}</h2>
      <ul className={style.list}>
        {list.map((item: TItem, key: number) =>
          <li key={key}>
            <ListItem item={item} listId={listId} onDelete={handleDeleteItem} />
          </li>
        )}
      </ul>

      {/* todo - перенести кнопку визуально в другое место */}
      <AddBtn onClick={onClick}>Добавить в список</AddBtn>
    </article>
  );
};

export default TodoListCard;