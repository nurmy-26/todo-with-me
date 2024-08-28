import ItemForm from '../../components/ui/form/item-form';
import ListForm from '../../components/ui/form/list-form';
import ListOfTodoLists from '../../components/list-of-todo-lists';
import Section from '../../components/section';
import style from './style.module.css';
import TodoToggleCheckbox from '../../4-features/toggle-todo/ui';

const MainPage = () => {
  return (
    <>
      {/* todo - сделать компонент заголовка чтоб не задавать стили тут */}
      <h1 className={style.header}>Читальные планы</h1>
      <Section ariaLabel='Добавление и дополнение списков'>
        <ListForm />

        <ItemForm />

        <TodoToggleCheckbox item={{
          "id": "2d395a70-a20a-4c80-8b6f-bf027b16b2ae",
          "title": "И повсюду тлеют пожары",
          "isDone": false
        }} />
      </Section>

      <Section ariaLabel='Настройки'> </Section>

      <Section ariaLabel='Списки'>
        <ListOfTodoLists />
      </Section>
    </>

  )
}

export default MainPage;