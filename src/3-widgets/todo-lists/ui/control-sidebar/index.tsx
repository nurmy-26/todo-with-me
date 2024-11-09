import { Link, useLocation } from 'react-router-dom';
import { AddTodoBtn, CreateTodoListBtn, DeleteAllTodoListsBtn } from '../../../../4-features';
import { routes } from '../../../../6-shared/const/routes';
import FilterBtn from './filter-btn';
import style from "./style.module.css";
import cn from 'classnames';


type ControlSidebarProps = {
  isDataEmpty?: boolean;
  addBtn: {
    isActive: boolean;
    handleClick: () => void;
  };
  filterBtn: {
    isActive: boolean;
    handleClick: () => void;
  };
}

const ControlSidebar = ({ isDataEmpty, addBtn, filterBtn }: ControlSidebarProps) => {
  const { isActive: isCreateFormActive, handleClick: toggleCreateFormVisibility } = addBtn;
  const { isActive: isFiltersActive, handleClick: toggleFiltersVisibility } = filterBtn;
  const location = useLocation();

  return (
    <>
      {/* todo - удалить форму */}
      {/* <Link to={routes.forms.addList} state={{ background: location }}>
        <CreateTodoListBtn variant={'tertiary'} />
      </Link> */}

      <CreateTodoListBtn
        isActive={isCreateFormActive}
        variant={'tertiary'}
        onClick={toggleCreateFormVisibility}
        extraClass={cn(!isCreateFormActive && style.inactive)}
      />

      {!isDataEmpty && <FilterBtn
        isActive={isFiltersActive}
        variant={'tertiary'}
        onClick={toggleFiltersVisibility}
        extraClass={cn(!isFiltersActive && style.inactive)}
      />}

      {/* todo - удалить и вместо этой формы сделать редактирование списка */}
      {!isDataEmpty && <Link to={routes.forms.addItem} state={{ background: location }}>
        <AddTodoBtn variant={'tertiary'} />
      </Link>}

      {!isDataEmpty && <Link to={routes.todolists.resetAllListsConfirmation} state={{ background: location }}>
        <DeleteAllTodoListsBtn variant={'tertiary'} />
      </Link>}

    </>
  );
};

export default ControlSidebar;