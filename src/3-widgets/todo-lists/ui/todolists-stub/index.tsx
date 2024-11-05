import { CreateRandomListsBtn } from '../../../../4-features';
import Typography from '../../../../6-shared/ui/typography';
import style from './style.module.css';


const TodolistsStub = () => {
  return (
    <div className={style.stub}>
      <Typography extraClass={style.text}>
        Похоже, у вас еще нет списков. Сгенерировать случайные?
      </Typography>

      <CreateRandomListsBtn withText customText={'Мне повезет!'} variant={'primary'} />
    </div>
  );
};

export default TodolistsStub;