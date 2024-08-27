import cn from 'classnames';
import style from './style.module.css';
import ListItem from './list-item';
import { TItem } from '../../6-shared/types';


type ListProps = {
  listItems: TItem[];
  listId: string;
  extraClass?: string;
};

const List = ({
  listItems,
  listId,
  extraClass,
}: ListProps) => {
  return (
    <ul className={cn(style.list, extraClass)}>
      {listItems.map((item: TItem, index: number) =>
        <li key={index}>
          <ListItem item={item} listId={listId} />
        </li>
      )}
    </ul>
  )
};

export default List;