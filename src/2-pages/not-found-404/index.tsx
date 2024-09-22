import { Link } from "react-router-dom";
import { routes } from "../../6-shared/const/routes";
import Typography from "../../6-shared/ui/typography";
import SinglePageLayout from "../../6-shared/ui/single-page-layout";
import Button from "../../6-shared/ui/button";


const NotFound404Page = () => {
  return (
    <SinglePageLayout>
      <Typography type={'h1'} extraClass={''}>Такой страницы не существует...</Typography>

      <Typography>
        <Link to={routes.home}>
          <Button variant={'tertiary'} size={'s'} isInline>
            Вернуться
          </Button>
        </Link>
        на главную
      </Typography>
    </SinglePageLayout>
  );
}

export default NotFound404Page;