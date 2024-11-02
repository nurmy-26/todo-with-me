import { useState } from 'react';
import cn from 'classnames';
import { useGetTodoLists } from '../../../5-entities';
import { useFilter } from '../../../6-shared/lib/hooks/useFilter';
import GridSectionLayout from '../../../6-shared/ui/grid-list-layout';
import { TList } from '../../../6-shared/types';
import List from '../../../6-shared/ui/list';
import Button from '../../../6-shared/ui/button';
import { XMarkIcon } from '../../../6-shared/ui/icons/xmark-icon';
import { FilterIcon } from '../../../6-shared/ui/icons/filter-icon';
import { MenuIcon } from '../../../6-shared/ui/icons/menu-icon';
import { SkeletonLoaderCard, TodoCard } from '../../todo-card';
import { getAverageSkeletonNumber } from '../lib/getAverageSkeletonNumber';
import { useSortTodolists } from '../lib/useSortTodolists';
import { filterByCheckboxes } from '../lib/filterByCheckboxes';
import ControlBar from './control-bar';
import Sidebar from './sidebar';
import useResponsive from '../../../6-shared/lib/hooks/useResponsive';
import style from './style.module.css';


const TodoLists = () => {
  const { data: todolists, isLoading } = useGetTodoLists();
  const skeletonCards = getAverageSkeletonNumber(); // сколько рендерить во время загрузки
  const isNarrowDesktop = useResponsive(1440);
  const isMobile = useResponsive();

  const renderTodoList = (list: TList) => {
    return (
      <TodoCard listInfo={list} />
    )
  }

  // поиск в зависимости от выбранных чекбоксов (по названию и/или элементам списков)
  const [isTitleChecked, setIsTitleChecked] = useState(true);
  const [isItemsChecked, setIsItemsChecked] = useState(true)

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

  const [isControlBarOpened, setIsControlBarOpened] = useState(false);
  const toggleControlBar = () => {
    setIsControlBarOpened(!isControlBarOpened);
  };

  const MenuIconType = isControlBarOpened ?
    (isNarrowDesktop ? 'caret-up' : 'caret-left') :
    (isNarrowDesktop ? 'caret-down' : 'caret-right');


  return (
    <>
      <Button
        aria-label={"Развернуть секцию фортировки и фильтров"}
        title={"Развернуть секцию фортировки и фильтров"}
        icon={<FilterIcon />}
        size={'s'}
        variant={'tertiary'}
        onClick={toggleControlBar}
        extraClass={cn(style.control_btn, style[`control_btn_${isControlBarOpened ? "opened" : "closed"}`])}
      ><MenuIcon type={MenuIconType} /></Button>

      <GridSectionLayout
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
        extraClass={cn(style.control_bar, style[`control_bar_${isControlBarOpened ? "opened" : "closed"}`])}
      />


      <GridSectionLayout
        label={"Мои списки"}
        mainContent={
          <List
            isLoading={isLoading}
            skeletonLoader={{ component: <SkeletonLoaderCard />, count: skeletonCards }}
            data={sortedItems}
            renderItem={renderTodoList}
          />
        }
        asideContent={<Sidebar />}
      />
    </>
  );
};

export default TodoLists;