import ItemForm from '../../components/item-form';
import ListForm from '../../components/list-form';
import ListOfTodoLists from '../../components/list-of-todo-lists';
import Section from '../../components/section';
import style from './style.module.css';

const MainPage = () => {
  return (
    <>
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