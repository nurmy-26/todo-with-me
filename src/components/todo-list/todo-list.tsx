import cn from 'classnames';
import styles from './todo-list.module.css';
import ListItem from '../book-card/book-card';
import AddBtn from '../buttons/add-btn/add-btn';


type TodoListProps = {
  title?: string;
  extraClass?: string;
  list?: string[]; // todo - заменить на массив объектов (когда в добавлении будет много пунктов)
  onClick?: (event: React.FormEvent) => void;
};

const TodoList = ({ title = 'Список', extraClass, list = [], onClick }: TodoListProps) => {
  return (
    <article className={cn(styles.list_container, extraClass)}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {list.map((item: string, key: number) =>
          <li key={key}>
            <ListItem>{item}</ListItem>
          </li>
        )}
      </ul>

      {/* todo - перенести кнопку визуально в другое место */}
      <AddBtn onClick={onClick}>Добавить в список</AddBtn>
    </article>
  );
};

export default TodoList;