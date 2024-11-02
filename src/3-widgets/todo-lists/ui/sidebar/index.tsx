import { Link, useLocation } from 'react-router-dom';
import { AddTodoBtn, TodoListCreateBtn } from '../../../../4-features';
import { routes } from '../../../../6-shared/const/routes';


const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <Link to={routes["add-new-list"]} state={{ background: location }}>
        <TodoListCreateBtn variant={'tertiary'} />
      </Link>

      <Link to={routes["add-new-item"]} state={{ background: location }}>
        <AddTodoBtn variant={'tertiary'} />
      </Link>
    </>
  );
};

export default Sidebar;