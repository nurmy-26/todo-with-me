import { ReactNode } from 'react';
import style from './style.module.css';

type CardPageProps = {
  component: ReactNode;
  title?: string;
}

const CardPage = ({ component, title }: CardPageProps) => {
  return (
    <div className={style.page_wrapper}>
      {title && <h1>{title}</h1>}
      {component}
    </div>

  )
}

export default CardPage;