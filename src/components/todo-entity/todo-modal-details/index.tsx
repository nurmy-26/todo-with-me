import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import AddBtn from '../../ui/buttons/add-btn';
import DeleteBtn from '../../ui/buttons/delete-btn';
import List from '../../list';
import { useGetTodoListQuery } from '../../../redux';
import { useDelete } from '../../../hooks/rtk-query/useDelete';

const TodoModalDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // извлекаем id из url
  const { deleteList } = useDelete();

  const { data: listInfo, isLoading } = useGetTodoListQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteList(listInfo.id);

    navigate("/");
  }

  return (
    <article className={style.content}>
      <header className={style.header}>
        <h2>{listInfo.title}</h2>
      </header>

      <List listItems={listInfo.items} listId={listInfo.id} extraClass={style.content_list} />

      <footer className={style.footer}>
        <AddBtn icon={'plus'} onClick={() => { }} extraClass={style.content_btn} />
        <DeleteBtn onDelete={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)} extraClass={style.content_btn} />
      </footer>
    </article>
  );
};

export default TodoModalDetails;