import { useState } from 'react';
import { CreateTodoListForm } from '../../../4-features';
import { useGetTodoLists } from '../../../5-entities';
import { useFilter } from '../../../6-shared/lib/hooks/useFilter';
import GridSectionLayout from '../../../6-shared/ui/grid-list-layout';
import { TList } from '../../../6-shared/types';
import Button from '../../../6-shared/ui/button';
import { XMarkIcon } from '../../../6-shared/ui/icons/xmark-icon';
import useResponsive from '../../../6-shared/lib/hooks/useResponsive';
import { useSortTodolists } from '../lib/useSortTodolists';
import { filterByCheckboxes } from '../lib/filterByCheckboxes';
import ListOfTodolists from './list-of-todolists';
import TodolistsStub from './todolists-stub';
import ControlBar from './control-bar';
import Sidebar from './sidebar';


const TodoLists = () => {
  const { data: todolists, isLoading } = useGetTodoLists();
  const isDataEmpty = todolists.length === 0;
  const isMobile = useResponsive();

  // поиск в зависимости от выбранных чекбоксов (по названию и/или элементам списков)
  const initialTitleCheckbox = true;
  const [isTitleChecked, setIsTitleChecked] = useState(initialTitleCheckbox);
  const initialItemsCheckbox = true;
  const [isItemsChecked, setIsItemsChecked] = useState(initialItemsCheckbox)

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
    setIsTitleChecked(initialTitleCheckbox);
    setIsItemsChecked(initialItemsCheckbox);
    resetSort();
    resetSearch();
  }

  // от 550px и ниже будет отображаться с текстом
  const resetBtn = (
    <Button
      aria-label={'Сбросить сортировку и фильтры'}
      title={'Сбросить сортировку и фильтры'}
      variant={'tertiary'}
      icon={<XMarkIcon />}
      onClick={handleReset}
    >
      {isMobile ? "Сбросить" : ""}
    </Button>
  );


  return (
    <>
      <CreateTodoListForm />

      {!isDataEmpty && <GridSectionLayout
        label={"Сортировка и фильтры"}
        mainContent={
          <ControlBar
            filterOptions={{
              isTitleChecked,
              setIsTitleChecked,
              isItemsChecked,
              setIsItemsChecked,
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
        asideContent={resetBtn}
      />}

      <GridSectionLayout
        label={"Мои списки"}
        isStubNeeded={isDataEmpty}
        stubComponent={<TodolistsStub />}
        mainContent={
          <ListOfTodolists isLoading={isLoading} data={sortedItems} />
        }
        asideContent={<Sidebar isDataEmpty={isDataEmpty} />}
      />
    </>
  );
};

export default TodoLists;