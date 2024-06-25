import cn from 'classnames';
import styles from './book-card.module.css';


type ListItemProps = {
  children: React.ReactNode;
  extraClass?: string;
  bookItem?: null; // todo - сделать обязательным и добавить типизацию
};

const ListItem = ({ children, extraClass, bookItem }: ListItemProps) => {
  return (
    // todo - заменить на норм теги, когда будет ясно содержимое
    <article className={cn(styles.card, extraClass)}>
      {/* <h2>{bookItem.title}</h2> */}
      <p>{children}</p>
      {/* <p>Rating: {bookItem.rating}</p> */}
      {/* <p>Pages: {bookItem.pages}</p> */}
      {/* Другие характеристики */}
    </article>
  );
};

export default ListItem;