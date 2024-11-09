import { MouseEvent } from 'react';
import Button from '../../../../../6-shared/ui/button';
import { FilterIcon } from '../../../../../6-shared/ui/icons/filter-icon';
import { ButtonProps } from '../../../../../6-shared/ui/button/type';


type FilterBtnProps = ButtonProps & {
  isActive?: boolean;
  disabled?: boolean;
  extraClass?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  withText?: boolean;
};

const FilterBtn = ({ isActive, disabled, extraClass, onClick, withText, ...rest }: FilterBtnProps) => {
  const text = isActive ? 'Скрыть секцию сортировки и фильтрации' : 'Показать секцию сортировки и фильтрации';


  return (
    <Button
      aria-label={text}
      icon={<FilterIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={onClick}
      // подсказка при наведении нужна только если у кнопки svg без текста
      title={withText ? '' : text}
      {...rest}
    >
      {withText && text}
    </Button>
  );
};

export default FilterBtn;