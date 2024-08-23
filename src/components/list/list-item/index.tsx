import cn from 'classnames';
import style from './style.module.css';
import { TItem, TList } from '../../../utils/mock-data';
import { useGetReadingsQuery, useUpdateReadingMutation } from '../../../redux';
import { CheckIcon } from '../../ui/icons/check-icon';


type ListItemProps = {
  children?: React.ReactNode;
  extraClass?: string;
  item: TItem;
  listId: string;
};

const ListItem = ({ children, extraClass, item, listId }: ListItemProps) => {
  // todo - вынести логику работы с data !!! (оставить в handleDeleteItem только updateReading)
  const { data = [] } = useGetReadingsQuery();
  const [updateReading] = useUpdateReadingMutation();

  const handleComplete = async () => {
    console.log(item);
    // todo - сделать выполнение
  };

  // todo - сделать кнопки галочки и крестика по бокам а не над элементом (?)
  const handleDeleteItem = async (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listId: string) => {
    event.preventDefault();

    // находим нужный список
    const listIndex = data.findIndex((list: TList) => list.id === listId);
    // фильтруем его чтоб убрать удаляемый элемент
    const updatedItems = data[listIndex].items.filter(
      (item: TItem) => item.id !== deletedItem.id
    );
    const updatedList = {
      ...data[listIndex],
      items: updatedItems
    };

    await updateReading({ listId, ...updatedList }).unwrap();
  };

  return (
    // todo - заменить на норм теги, когда будет ясно содержимое
    <article className={cn(style.card, extraClass)}>
      {/* <h2>{bookItem.title}</h2> */}
      <CheckIcon />
      <p>{item.title}</p>
      {/* <p>Rating: {bookItem.rating}</p> */}
      {/* <p>Pages: {bookItem.pages}</p> */}
      {/* Другие характеристики */}

      <div className={style.overlay}>
        <button
          aria-label="Complete task"
          className={style.emoji_button}
          onClick={handleComplete}
        >
          ✅
        </button>
        <button
          aria-label="Delete task"
          className={style.emoji_button}
          onClick={(e) => handleDeleteItem(e, item, listId)}
        >
          ❌
        </button>
      </div>
    </article>
  );
};

export default ListItem;