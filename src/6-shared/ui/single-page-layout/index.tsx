import { Link } from 'react-router-dom';
import { routes } from '../../const/routes';
import { ArrowLeftIcon } from '../icons/arrow-left-icon';
import Button from '../button';
import style from './style.module.css';


type SinglePageLayoutProps = {
  children: React.ReactNode;
}


const SinglePageLayout = ({ children }: SinglePageLayoutProps) => {
  return (
    <section className={style.page_wrapper}>
      {children}

      <Link to={routes.home}>
        <Button icon={<ArrowLeftIcon />} variant={'primary'} extraClass={style.btn_back}>На главную</Button>
      </Link>
    </section>

  )
}

export default SinglePageLayout;