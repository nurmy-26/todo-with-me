import { TItem, TList, TListItemProps } from '../../utils/mock-data';

type BaseListProps = {
  itemComponent: React.FC<TListItemProps>;
  listData: TList[];
  isLoading: boolean;
  handleDeleteItem: (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listTitle: string) => Promise<void>;
  handleDeleteList: (event: React.MouseEvent<HTMLButtonElement>, listId: string) => Promise<void>;
}

const BaseList = ({
  itemComponent: ItemComponent,
  listData,
  isLoading,
  handleDeleteItem,
  handleDeleteList,
  ...rest
}: BaseListProps) => {

  return isLoading ?
    <p>Loading...</p>
    :
    listData.map((list) => (
      <ItemComponent
        key={list.id}
        title={list.title}
        listId={list.id}
        handleDeleteItem={handleDeleteItem}
        handleDeleteList={(e: React.MouseEvent<HTMLButtonElement>) => handleDeleteList(e, list.id)}
        {...rest}
      />
    ))
}

export default BaseList;