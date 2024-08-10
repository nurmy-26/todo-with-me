import ItemForm from '../../components/ui/form/item-form';
import ListForm from '../../components/ui/form/list-form';
import ListOfTodoLists from '../../components/list-of-todo-lists';
import Section from '../../components/section';
import style from './style.module.css';

const MainPage = () => {
  return (
    <>
      {/* todo - сделать компонент заголовка чтоб не задавать стили тут */}
      <h1 className={style.header}>Читальные планы</h1>
      <Section ariaLabel='Добавление и дополнение списков'>
        <ListForm />

        <ItemForm />
      </Section>

      <Section ariaLabel='Настройки'> </Section>

      <Section ariaLabel='Списки'>
        <ListOfTodoLists />
      </Section>
    </>

  )
}

export default MainPage;