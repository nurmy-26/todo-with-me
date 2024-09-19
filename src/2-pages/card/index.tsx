import { Link } from 'react-router-dom';
import { TodoCard } from '../../3-widgets';
import { routes } from '../../6-shared/const/routes';
import Button from '../../6-shared/ui/button';
import style from './style.module.css';

const CardPage = () => {
  return (
    <div className={style.page_wrapper}>
      <TodoCard type={'page'} />

      <Link to={routes.home}>
        <Button variant={'primary'} extraClass={style.btn_back}>На главную</Button>
      </Link>
    </div>

  )
}

export default CardPage;