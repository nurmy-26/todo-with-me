import cn from 'classnames';
import style from './style.module.css';
import DeleteListBtn from '../../../4-features/delete-todo-list/ui';
import TodoList from '../../todo-list/ui';
import { useDeleteTodoList } from '../../../5-entities/Todo/model';
import { TList } from '../../../5-entities/Todo/model/types';


type TodoCardProps = {
  title?: string;
  listInfo: TList;
  extraClass?: string;
};

const TodoCard = ({
  title = 'Список',
  listInfo,
  extraClass,
}: TodoCardProps) => {
  const { deleteList } = useDeleteTodoList();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteList(listInfo.id);
  }

  return (
    <article className={cn(style.card, extraClass)}>
      <DeleteListBtn onClick={(e) => handleDelete(e)} extraClass={style.del_btn} />

      <h2>{listInfo.title || title}</h2>

      <TodoList list={listInfo} />

      Добавить в список (нет фичи)
      {/* todo - добавить фичу для разворота поля для добавления нового пункта в список */}
      {/* todo - input "Добавить в список" */}
    </article>
  )
};

export default TodoCard;