import cn from 'classnames';
import style from './style.module.css';
import { TList } from '../../utils/mock-data';
import TodoCardDetails from './todo-card-details';
import TodoModalDetails from './todo-modal-details';
import TodoPageDetails from './todo-page-details';
import { useDeleteReadingMutation } from '../../redux';
import { Link, useLocation } from 'react-router-dom';

// один раз прописать логику работы карточки (onAdd, onDelete) и пробрасывать её на нужный рендер
type TodoEntityProps = {
  type: 'card' | 'modal' | 'page';
  title?: string;
  listInfo: TList;
};

const TodoEntity = ({ listInfo, title, type }: TodoEntityProps) => {
  const location = useLocation();
  const [deleteReading] = useDeleteReadingMutation();

  const handleDeleteList = async (id: string) => {
    await deleteReading(id).unwrap();
  }


  if (type === 'card') {
    return (
      <Link to={`/${listInfo.id}`} state={{ background: location }}>
        <TodoCardDetails title={title || listInfo.title} listInfo={listInfo} onDelete={() => handleDeleteList(listInfo.id)} />
      </Link>
    )
  }

  if (type === 'modal') {
    return <TodoModalDetails />
  }

  if (type === 'page') {
    return <TodoPageDetails />
  }
};

export default TodoEntity;