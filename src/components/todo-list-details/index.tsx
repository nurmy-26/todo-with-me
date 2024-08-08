import { useParams } from 'react-router-dom';
import TodoListCard from '../todo-list-card';
import style from './style.module.css';

const TodoListDetails = () => {
  const { id } = useParams(); // извлекаем id из url

  if (!id) {
    return null;
  }

  return (
    <TodoListCard listId={id} extraClass={style.details} />
  );
};

export default TodoListDetails;