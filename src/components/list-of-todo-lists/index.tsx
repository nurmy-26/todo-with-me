import { Link, useLocation } from "react-router-dom";
import { useGetReadingsQuery } from "../../redux";
import { TList } from '../../utils/mock-data';
import TodoCardDetails from "../todo-entity/todo-card-details";
import style from './style.module.css';
import TodoEntity from "../todo-entity";

const ListOfTodoLists = () => {
  const { data = [], isLoading } = useGetReadingsQuery(); // get-запрос к "серверу" за данными "reading"
  const location = useLocation();

  return isLoading ?
    <p>Loading...</p>
    :
    <ul className={style.list}>
      {data.map((list: TList) => (
        <li key={list.id} className={style.list_item}>
          {/* <Link to={`/${list.id}`} state={{ background: location }}> */}
          {/* <TodoCardDetails
              title={list.title}
              listInfo={list}
            /> */}
          <TodoEntity
            type={"card"}
            listInfo={list} />
        </li>
      ))}
    </ul>
}

export default ListOfTodoLists;