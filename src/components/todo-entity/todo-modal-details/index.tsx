import { useParams } from 'react-router-dom';
import style from './style.module.css';

const TodoModalDetails = () => {
  const { id } = useParams(); // извлекаем id из url

  if (!id) {
    return null;
  }

  return (
    <article className={style.content}></article>
  );
};

export default TodoModalDetails;