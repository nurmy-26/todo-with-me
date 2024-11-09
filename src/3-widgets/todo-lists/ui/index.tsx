import { useState } from 'react';
import { CreateTodoListForm } from '../../../4-features';
import { useGetTodoLists } from '../../../5-entities';
import { useFilter } from '../../../6-shared/lib/hooks/useFilter';
import GridSectionLayout from '../../../6-shared/ui/grid-list-layout';
import { TList } from '../../../6-shared/types';
import { useSortTodolists } from '../lib/useSortTodolists';
import { filterByCheckboxes } from '../lib/filterByCheckboxes';
import ListOfTodolists from './list-of-todolists';
import ControlBar from './control-bar';
import ControlSidebar from './control-sidebar';
import { useToggle } from '../../../6-shared/lib/hooks/useToggle';
import ResetBtn from './reset-btn';


const TodoLists = () => {
  const { data: todolists, isLoading } = useGetTodoLists();
  const isDataEmpty = todolists.length === 0;

  // поиск в зависимости от выбранных чекбоксов (по названию и/или элементам списков)
  const initialTitleCheckbox = true;
  const { state: isTitleChecked, toggle: toggleTitleCheckbox, reset: resetTitleCheckbox } = useToggle(initialTitleCheckbox);
  const initialItemsCheckbox = true;
  const { state: isItemsChecked, toggle: toggleItemsCheckbox, reset: resetItemsCheckbox } = useToggle(initialItemsCheckbox);

  // видимость формы добавления списка и секции сортировки и фильтрации
  const initialAddFormVisibility = true;
  const { state: isAddFormVisible, toggle: toggleAddFormVisibility } = useToggle(initialAddFormVisibility);
  const initialControlBarVisibility = false;
  const { state: isControlBarVisible, toggle: toggleControlBarVisibility } = useToggle(initialControlBarVisibility);


  // общий фильтр
  const { searchValue, setSearchValue, filteredItems, resetSearch } = useFilter(
    todolists,
    filterByCheckboxes(isTitleChecked, isItemsChecked)
  );

  // выбор поля для сортировки (по умолчанию - по дате создания, по возрастанию)
  const initialSortField = 'creationDate';
  const [sortField, setSortField] = useState<Exclude<keyof TList, "id">>(initialSortField);
  // общая сортировка
  const { sortMode, toggleSortMode, resetSort, sortedItems } = useSortTodolists(filteredItems, sortField);

  // при сбросе вернутся стартовые значения ("по дате создания", sortMode - "asc")
  const handleReset = () => {
    setSortField(initialSortField);
    resetTitleCheckbox();
    resetItemsCheckbox();
    resetSort();
    resetSearch();
  }


  return (
    <>
      {isAddFormVisible && <CreateTodoListForm />}

      {!isDataEmpty && isControlBarVisible &&
        <GridSectionLayout
          label={"Сортировка и фильтры"}
          mainContent={
            <ControlBar
              filterOptions={{
                isTitleChecked,
                toggleTitleCheckbox,
                isItemsChecked,
                toggleItemsCheckbox,
                searchValue,
                setSearchValue
              }}
              sortOptions={{
                sortField,
                setSortField,
                sortMode,
                toggleSortMode
              }}
            />
          }
          asideContent={<ResetBtn handleReset={handleReset} />}
        />}

      <GridSectionLayout
        label={"Мои списки"}
        mainContent={
          <ListOfTodolists isLoading={isLoading} initialData={todolists} renderedData={sortedItems} />
        }
        asideContent={
          <ControlSidebar
            isDataEmpty={isDataEmpty}
            addBtn={{ isActive: isAddFormVisible, handleClick: toggleAddFormVisibility }}
            filterBtn={{ isActive: isControlBarVisible, handleClick: toggleControlBarVisibility }} />
        }
      />
    </>
  );
};

export default TodoLists;