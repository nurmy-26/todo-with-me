import cn from 'classnames';
import styles from './app.module.css';
import Header from '../header/header';
import ListForm from '../list-form';
import ItemForm from '../item-form';
import Section from '../section';
import ListOfTodoLists from '../list-of-todo-lists';

// todo - иконки "переместить" и "копировать" при наведении на каждый пункт (id остается тем же)
// если отмечается в одном списке - отмечается везде

// todo - отдельно сделать эмодзи (от 1 до 3 штук перед названием), отдельно - теги (например, по именам советчиков, активности и тд)

// todo - сделать в правом углу списка троеточие и выпадающий список (удалить, редактировать, ...)

const App = () => {
  const nav = ['Пунктик 1', 'Пунктик 2', 'Пунктик 3', 'Пунктик 4'];

  return (
    <>
      <Header navList={nav} />

      <main className={cn(styles.main, styles.grid)}>
        <h1 className={styles.header}>Читальные планы</h1>

        <Section ariaLabel='Добавление и дополнение списков'>
          <ListForm />

          <ItemForm />
        </Section>

        <Section ariaLabel='Настройки'> </Section>

        <Section ariaLabel='Списки'>
          <ListOfTodoLists />
        </Section>
      </main >
    </>

  )
}

export default App
