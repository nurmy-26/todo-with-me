import TodoEntity from '../../components/todo-entity';
import { useGetReadingQuery } from '../../redux';
import style from './style.module.css';
import { useParams } from 'react-router-dom';

const CardPage = () => {
  const { id } = useParams(); // извлекаем id из url
  const { data: listInfo, isLoading } = useGetReadingQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.page_wrapper}>
      <TodoEntity type='details' listInfo={listInfo} />
    </div>

  )
}

export default CardPage;