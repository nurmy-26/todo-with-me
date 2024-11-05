import { Link, useLocation } from 'react-router-dom';
import { AddTodoBtn, CreateTodoListBtn, DeleteAllTodoListsBtn } from '../../../../4-features';
import { routes } from '../../../../6-shared/const/routes';


type SidebarProps = {
  isDataEmpty?: boolean;
}

const Sidebar = ({ isDataEmpty }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      <Link to={routes.forms.addList} state={{ background: location }}>
        <CreateTodoListBtn variant={'tertiary'} />
      </Link>

      {!isDataEmpty && <Link to={routes.forms.addItem} state={{ background: location }}>
        <AddTodoBtn variant={'tertiary'} />
      </Link>}

      {!isDataEmpty && <Link to={routes.todolists.resetAllListsConfirmation} state={{ background: location }}>
        <DeleteAllTodoListsBtn variant={'tertiary'} />
      </Link>}

    </>
  );
};

export default Sidebar;