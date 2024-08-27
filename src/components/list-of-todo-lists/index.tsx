import { Link, useLocation } from "react-router-dom";
import { useGetTodoListsQuery } from "../../redux";
import style from './style.module.css';
import TodoEntity from "../todo-entity";
import { TList } from "../../6-shared/types";

const ListOfTodoLists = () => {
  const { data = [], isLoading } = useGetTodoListsQuery(); // get-запрос к "серверу" за данными "todolist"
  const location = useLocation();

  return isLoading ?
    <p>Loading...</p>
    :
    <ul className={style.list}>
      {data.map((list: TList) => (
        <li key={list.id} className={style.list_item}>

          <Link to={`/${list.id}`} state={{ background: location }}>
            <TodoEntity
              type={"card"}
              listInfo={list} />
          </Link>

        </li>
      ))}
    </ul>
}

export default ListOfTodoLists;