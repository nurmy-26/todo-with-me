import cn from 'classnames';
import styles from './todo-list.module.css';
import ListItem from '../list-item/list-item';
import AddBtn from '../buttons/add-btn/add-btn';
import { TItem } from '../../utils/data';
import DeleteBtn from '../buttons/delete-btn/delete-btn';


type TodoListProps = {
  title?: string;
  extraClass?: string;
  list?: TItem[];
  onClick?: (event: React.FormEvent) => void;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listTitle: string) => Promise<void>;
};

const TodoList = ({ title = 'Список', extraClass, list = [], onClick, onDelete }: TodoListProps) => {
  return (
    <article className={cn(styles.list_container, extraClass)}>
      <DeleteBtn extraClass={styles.del_btn} />

      <h2>{title}</h2>
      <ul className={styles.list}>
        {list.map((item: TItem, key: number) =>
          <li key={key}>
            <ListItem item={item} listTitle={title} onDelete={onDelete} />
          </li>
        )}
      </ul>

      {/* todo - перенести кнопку визуально в другое место */}
      <AddBtn onClick={onClick}>Добавить в список</AddBtn>
    </article>
  );
};

export default TodoList;