import { TodoPageDetails } from '../../3-widgets';
import style from './style.module.css';

const CardPage = () => {
  return (
    <div className={style.page_wrapper}>
      <TodoPageDetails />
    </div>

  )
}

export default CardPage;