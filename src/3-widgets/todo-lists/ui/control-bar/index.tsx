import { ChangeEvent, Dispatch, forwardRef, SetStateAction, useState } from 'react';
import cn from 'classnames';
import { SwitchIcon } from '../../../../6-shared/ui/icons/switch-icon';
import Checkbox from '../../../../6-shared/ui/input/checkbox';
import Typography from '../../../../6-shared/ui/typography';
import Input from '../../../../6-shared/ui/input';
import Radio from '../../../../6-shared/ui/input/radio';
import SwitchBtn from '../../../../6-shared/ui/button/switch-btn';
import { TList } from '../../../../6-shared/types';
import { getSortOptions } from '../../lib/getSortOptions';
import { SortIcon } from '../../../../6-shared/ui/icons/sort-icon';
import { sortFieldsOptions } from '../../lib/sortFieldsOptions';
import style from './style.module.css';


type ControlBarProps = {
  filterOptions: {
    isTitleChecked: boolean;
    toggleTitleCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
    isItemsChecked: boolean;
    toggleItemsCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
  };
  sortOptions: {
    sortField: Exclude<keyof TList, "id">;
    setSortField: Dispatch<SetStateAction<Exclude<keyof TList, "id">>>;
    sortMode: "asc" | "desc";
    toggleSortMode: () => void;
  };
};

const ControlBar = forwardRef<HTMLDivElement, ControlBarProps>(({
  filterOptions, sortOptions
}: ControlBarProps,
  forwardedRef) => {
  const { isTitleChecked, toggleTitleCheckbox, isItemsChecked, toggleItemsCheckbox, searchValue, setSearchValue } = filterOptions;
  const { sortField, setSortField, sortMode, toggleSortMode } = sortOptions;
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // если не выбран ни один checkbox и курсор стоит в поле поиска - отобразит предупреждение
  const errorMessage =
    !isTitleChecked && !isItemsChecked && isSearchFocused
      ? 'Выберите область поиска'
      : '';

  const isTitleSorted = sortField === "title";
  const isItemsSorted = sortField === "items";
  const isDateSorted = sortField === "creationDate";

  // на основе текущих фильтров получаем описание, значок и подсказку для исп-я в рендере
  const { sortDescription, sortLabel, sortHint } = getSortOptions(sortField, sortMode);
  const titleLabel = sortFieldsOptions["title"].name;
  const itemsLabel = sortFieldsOptions["items"].name;
  const dateLabel = sortFieldsOptions["creationDate"].name;

  const switchBtnOptions = [
    {
      icon: <SwitchIcon type='left' />,
      label: sortLabel,
      conditionName: 'asc',
    },
    {
      icon: <SwitchIcon type='right' />,
      label: sortLabel,
      conditionName: 'desc',
    }
  ];

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    setSortField(e.target.value as Exclude<keyof TList, "id">)
  };


  return (
    <div className={style.wrapper} ref={forwardedRef}>
      <div className={cn(style.area, style.sort)}>
        <SwitchBtn
          variant={'primary'}
          size={'s'}
          title={sortHint}
          options={switchBtnOptions}
          sortName={sortMode}
          onToggle={toggleSortMode}
          extraClass={style.switch}
        />

        <div className={style.radio}>
          <Radio
            aria-label={titleLabel}
            title={titleLabel}
            label={<SortIcon type={'abc'} />}
            name={"sort-field"}
            value={"title"}
            isChecked={isTitleSorted}
            handleChange={handleSort}
          />

          <Radio
            aria-label={itemsLabel}
            title={itemsLabel}
            label={<SortIcon type={'check'} />}
            name={"sort-field"}
            value={"items"}
            isChecked={isItemsSorted}
            handleChange={handleSort}
          />

          <Radio
            aria-label={dateLabel}
            title={dateLabel}
            label={<SortIcon type={'calendar'} />}
            name={"sort-field"}
            value={"creationDate"}
            isChecked={isDateSorted}
            handleChange={handleSort}
          />
        </div>

        <Typography extraClass={style.description_text}>{sortDescription}</Typography>
      </div>

      <div className={cn(style.area, style.search)}>
        <Input
          error={errorMessage}
          aria-label={"Поиск среди списков"}
          shape={'line'}
          type={"search"}
          name={"search"}
          placeholder={"Поиск"}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />

        <Checkbox
          name={'search-checkbox'}
          label={'Среди имен списков'}
          value={'title-checkbox'}
          isChecked={isTitleChecked}
          handleChange={toggleTitleCheckbox}
          extraClass={style.search_checkbox}
        />
        <Checkbox
          name={'search-checkbox'}
          label={'Среди элементов списков'}
          value={'items-checkbox'}
          isChecked={isItemsChecked}
          handleChange={toggleItemsCheckbox}
          extraClass={style.search_checkbox}
        />
      </div>

      <div className={cn(style.area, style.filter)}></div>
    </div>
  );
});

export default ControlBar;