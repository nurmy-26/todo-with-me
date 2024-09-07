import { useNavigate, useParams } from 'react-router-dom';
import { DeleteListBtn } from '../../../4-features';
import { useDeleteTodoList, useGetTodoLists } from '../../../5-entities';
import { routes } from '../../../6-shared/const/routes';
import { TItem, TList } from '../../../6-shared/types';
import TodoList from '../../todo-list/ui';
import style from './style.module.css';


const TodoPageDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // извлекаем id из url
  const { deleteList } = useDeleteTodoList();
  const { data, isLoading } = useGetTodoLists();

  // todo - доделать, убрать лишнее
  if (!id) {
    return null
  }

  const listInfo: TList = data.find((item: TItem) => item.id === id);
  console.log(listInfo)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!listInfo) {
    return <p>Error!</p>
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteList(listInfo.id);

    navigate(routes.home);
  }

  return (
    <article className={style.content}>

      <header className={style.header}>
        {/* <AddBtn icon={'plus'} onClick={onAdd} extraClass={style.content_btn} /> */}
        Добавить в список
        {/* todo - добавить фичу для разворота поля для добавления нового пункта в список */}
        {/* todo - input "Добавить в список" */}

        <h1>{listInfo.title}</h1>

        <DeleteListBtn onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)} extraClass={style.content_btn} />
      </header>

      <TodoList list={listInfo} extraClass={style.content_list} />
    </article>
  );
};

export default TodoPageDetails;