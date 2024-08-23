import cn from 'classnames';
import style from './style.module.css';
import AddBtn from '../../ui/buttons/add-btn';
import { TList } from '../../../utils/mock-data';
import DeleteBtn from '../../ui/buttons/delete-btn';
import List from '../../list';


type TodoCardDetailsProps = {
  title?: string;
  listInfo: TList;
  extraClass?: string;
  onAdd?: (event: React.FormEvent) => void;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>, id: string) => Promise<void>;
};

const TodoCardDetails = ({
  title = 'Список',
  listInfo,
  extraClass,
  onAdd,
  onDelete
}: TodoCardDetailsProps) => {
  return (
    <article className={cn(style.card, extraClass)}>
      <DeleteBtn extraClass={style.del_btn} onDelete={onDelete} />

      <h2>{title}</h2>

      <List listItems={listInfo.items} listId={listInfo.id} />

      {/* todo - перенести кнопку визуально в другое место */}
      <AddBtn onClick={onAdd}>Добавить в список</AddBtn>
    </article>
  )
};

export default TodoCardDetails;