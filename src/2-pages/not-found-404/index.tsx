import { Link } from "react-router-dom";
import { routes } from "../../6-shared/const/routes";
import Typography from "../../6-shared/ui/typography";
import SinglePageLayout from "../../6-shared/ui/single-page-layout";


const NotFound404Page = () => {
  return (
    <SinglePageLayout>
      <Typography type={'h1'} extraClass={''}>Такой страницы не существует...</Typography>

      <Typography>Хотите <Link to={routes.home}><span>вернуться на главную</span></Link>?</Typography>
    </SinglePageLayout>
  );
}

export default NotFound404Page;