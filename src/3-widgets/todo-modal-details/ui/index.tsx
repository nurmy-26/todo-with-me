import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import DeleteListBtn from '../../../4-features/delete-todo-list/ui';
import { useDeleteTodoList, useGetTodoLists } from '../../../5-entities/Todo/model';
import { useMemo } from 'react';
import { TItem, TList } from '../../../5-entities/Todo/model/types';
import TodoList from '../../todo-list/ui';

const TodoModalDetails = () => {
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

    navigate(-1); // после удаления возврат на предыдущую
  }

  return (
    <article className={style.content}>
      <header className={style.header}>
        <h2>{listInfo.title}</h2>
      </header>

      <TodoList list={listInfo} extraClass={style.content_list} />

      <footer className={style.footer}>
        Добавить в список
        {/* todo - добавить фичу для разворота поля для добавления нового пункта в список */}
        {/* todo - input "Добавить в список" */}

        <DeleteListBtn onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)} extraClass={style.content_btn} />
      </footer>
    </article>
  );
};

export default TodoModalDetails;