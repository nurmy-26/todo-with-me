import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";


const NotFound404Page = () => {
  return (
    <section>
      <h1>Такой страницы не существует...</h1>

      <p>Хотите <Link to={"/"}>вернуться на главную</Link>?</p>
    </section>
  );
}

export default NotFound404Page;