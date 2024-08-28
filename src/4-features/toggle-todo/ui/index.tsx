import cn from 'classnames';
import { useCheckbox } from '../../../6-shared/lib/useCheckbox';
import { CheckIcon } from '../../../6-shared/ui/icons/check-icon';
import style from './style.module.css';
import { TItem } from '../../../5-entities/Todo/model/types';
import { useToggleTodo } from '../model';
import { useGetTodoLists } from '../../../5-entities/Todo/model';


type TodoToggleCheckboxProps = {
  item: TItem;
  extraClass?: string;
  onChange: (event: React.FormEvent) => void;
};

const TodoToggleCheckbox = ({ item, extraClass, onChange }: TodoToggleCheckboxProps) => {
  const { id, title, isDone } = item;
  // todo - вынести эту логику + изменение в db выше уровнем (пробрасывать пропсом onChange)
  // const { isChecked, toggleCheckbox } = useCheckbox();

  // const handleToggle = (e) => {
  //   console.log(e.target)
  //   console.log(e.target.checked)
  //   toggleCheckbox();
  // }

  const checkboxIcon = isDone ? <CheckIcon type={'white-rectangle'} /> : <CheckIcon />

  return (
    <label className={cn(style.label, extraClass)}>
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