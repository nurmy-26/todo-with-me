import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';
import AddBtn from '../../ui/buttons/add-btn';
import DeleteBtn from '../../ui/buttons/delete-btn';
import List from '../../list';
import { TList } from '../../../6-shared/types';

type TodoPageDetailsProps = {
  extraClass?: string;
  listInfo: TList;
  onAdd?: (event: React.FormEvent) => void;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>, id: string) => Promise<void>;
};

const TodoPageDetails = ({
  extraClass,
  listInfo,
  onAdd,
  onDelete,
}: TodoPageDetailsProps) => {
  const navigate = useNavigate();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await onDelete(e, listInfo.id); // основное действие при нажатие на кнопку удаления

    // todo - перенаправлять на страницу "(действие) успешно выполнено!" (карточка удалена) -> потом на главную через 10 сек по отсчету
    navigate("/"); // доп действие, не зависящее от логики удаления
  }

  return (
    <article className={cn(style.content, extraClass)}>

      <header className={style.header}>

        <AddBtn icon={'plus'} onClick={onAdd} extraClass={style.content_btn} />

        <h1>{listInfo.title}</h1>

        <DeleteBtn onDelete={handleDelete} extraClass={style.content_btn} />
      </header>

      <List listItems={listInfo.items} listId={listInfo.id} extraClass={style.content_list} />
    </article>
  );
};

export default TodoPageDetails;