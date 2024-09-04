import cn from 'classnames';
import { CheckIcon } from '../../../6-shared/ui/icons/check-icon';
import { TItem } from '../../../5-entities/Todo/model/types';
import style from './style.module.css';


type TodoToggleCheckboxProps = {
  item: TItem;
  extraClass?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoToggleCheckbox = ({ item, extraClass, onChange }: TodoToggleCheckboxProps) => {
  const { id, title, isDone } = item;

  const checkboxIcon = isDone ? <CheckIcon type={'white-rectangle'} /> : <CheckIcon />

  return (
    <label className={cn(style.label, extraClass)} onClick={(e) => e.stopPropagation()}>
      <input
        className={style.checkbox}
        type="checkbox"
        name={id}
        value={title}
        checked={isDone}
        onChange={onChange}
      />

      {checkboxIcon}
    </label>
  );
};

export default TodoToggleCheckbox;