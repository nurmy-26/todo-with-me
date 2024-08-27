import TodoCardDetails from './todo-card-details';
import TodoPageDetails from './todo-page-details';
import { useDelete } from '../../hooks/rtk-query/useDelete';
import { TList } from '../../6-shared/types';

// один раз прописать логику работы карточки (onAdd, onDelete) и пробрасывать для нужного рендера (card/modal/page)
type TodoEntityProps = {
  type: 'card' | 'details';
  title?: string;
  listInfo: TList;
};

const TodoEntity = ({ listInfo, title, type }: TodoEntityProps) => {
  const { deleteList } = useDelete();

  const handleDeleteList = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    deleteList(id);
  }

  // todo - логику взаимодействия с ListItem тоже вынести сюда! (и вынести в хуки одинаковую логику?)


  if (type === 'card') {
    return (
      <TodoCardDetails title={title || listInfo.title} listInfo={listInfo} onDelete={(e) => handleDeleteList(e, listInfo.id)} />
    )
  }


  if (type === 'details') {
    return <TodoPageDetails listInfo={listInfo} onDelete={handleDeleteList} />
  }
};

export default TodoEntity;