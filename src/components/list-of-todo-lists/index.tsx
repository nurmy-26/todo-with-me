import { Link, useLocation } from "react-router-dom";
import { useGetReadingsQuery } from "../../redux";
import { TList } from '../../utils/mock-data';
import TodoListCard from "../todo-list-card";
import style from './style.module.css';

const ListOfTodoLists = () => {
  const { data = [], isLoading } = useGetReadingsQuery(); // get-запрос к "серверу" за данными "reading"
  const location = useLocation();

  return isLoading ?
    <p>Loading...</p>
    :
    <ul className={style.list}>
      {data.map((list: TList) => (
        <li key={list.id} className={style.list_item}>
          <Link to={`/${list.id}`} state={{ background: location }}>
            <TodoListCard
              title={list.title}
              listId={list.id}
            />
          </Link>
        </li>
      ))}
    </ul>
}

export default ListOfTodoLists;