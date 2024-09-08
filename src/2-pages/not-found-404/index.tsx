import { Link } from "react-router-dom";
import { routes } from "../../6-shared/const/routes";
import Typography from "../../6-shared/ui/typography";
import style from "./style.module.css"


const NotFound404Page = () => {
  return (
    <section>
      <Typography type={'h1'} extraClass={''}>Такой страницы не существует...</Typography>

      <Typography>Хотите <Link to={routes.home}>вернуться на главную</Link>?</Typography>
    </section>
  );
}

export default NotFound404Page;