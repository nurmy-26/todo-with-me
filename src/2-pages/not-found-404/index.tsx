import Typography from "../../6-shared/ui/typography";
import SinglePageLayout from "../../6-shared/ui/single-page-layout";
import style from "./style.module.css";


const NotFound404Page = () => {
  return (
    <SinglePageLayout>
      <Typography type={'h1'} extraClass={''}>Такой страницы не существует...</Typography>
      <Typography extraClass={style.digit}>404</Typography>
    </SinglePageLayout>
  );
}

export default NotFound404Page;