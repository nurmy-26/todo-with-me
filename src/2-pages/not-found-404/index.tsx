import { Link } from "react-router-dom";
import { routes } from "../../6-shared/const/routes";
import style from "./style.module.css"


const NotFound404Page = () => {
  return (
    <section>
      <h1>Такой страницы не существует...</h1>

      <p>Хотите <Link to={routes.home}>вернуться на главную</Link>?</p>
    </section>
  );
}

export default NotFound404Page;