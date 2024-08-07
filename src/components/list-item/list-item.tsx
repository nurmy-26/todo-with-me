import cn from 'classnames';
import styles from './list-item.module.css';
import { TItem, TList, testList } from '../../utils/mock-data';
import { useLoading } from '../../hooks/useLoading';
import setDelay, { loadFromLocalStorage, removeListItemFromLocalStorage } from '../../utils/helpers';
import { useState } from 'react';


type ListItemProps = {
  children?: React.ReactNode;
  extraClass?: string;
  item: TItem;
  listId: string;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listId: string) => Promise<void>;
};

const ListItem = ({ children, extraClass, item, listId, onDelete }: ListItemProps) => {
  const { loading, setLoading } = useLoading();

  const handleComplete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(item);
    // todo - сделать выполнение
  };

  // todo - сделать кнопки галочки и крестика по бокам а не над элементом (?)
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    // console.log(item);

    // todo - сделать локальную логику удаления без проброса onDelete
  };

  return (
    // todo - заменить на норм теги, когда будет ясно содержимое
    <article className={cn(styles.card, extraClass)}>
      {/* <h2>{bookItem.title}</h2> */}
      <p>{item.title}</p>
      {/* <p>Rating: {bookItem.rating}</p> */}
      {/* <p>Pages: {bookItem.pages}</p> */}
      {/* Другие характеристики */}

      <div className={styles.overlay}>
        <button
          aria-label="Complete task"
          className={styles.emoji_button}
          disabled={loading}
          onClick={handleComplete}
        >
          ✅
        </button>
        <button
          aria-label="Delete task"
          className={styles.emoji_button}
          disabled={loading}
          onClick={(event) => onDelete(event, item, listId)}
        >
          ❌
        </button>
      </div>
    </article>
  );
};

export default ListItem;