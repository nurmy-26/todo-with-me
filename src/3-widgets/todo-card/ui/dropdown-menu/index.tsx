import { Link, useLocation } from 'react-router-dom';
import { DeleteListBtn } from '../../../../4-features';
import { routes } from '../../../../6-shared/const/routes';
import DropdownList from '../../../../6-shared/ui/dropdown-list';


type TodolistDropdownMenuProps = {
  listId: string;
  type: 'card' | 'modal' | 'page';
};

const TodolistDropdownMenu = ({ listId, type }: TodolistDropdownMenuProps) => {
  const location = useLocation();

  // пункты выпадающего списка
  const dropdownMenuComponents = [
    <Link
      to={`${routes.todolists.deleteList}/${listId}`}
      // routes.home нужен, т.к. иначе location считывает как todolists/:id и отображает CardPage и изображение прыгает
      state={{ background: (type === 'modal' ? routes.home : location) }}
    >
      <DeleteListBtn size={'m'} />
    </Link>,

    // todo - сюда могут добавиться и другие
    // добавить фичу "Редактировать список"
  ];


  return (
    <DropdownList list={dropdownMenuComponents} />
  );
};

export default TodolistDropdownMenu;