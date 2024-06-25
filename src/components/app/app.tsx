import cn from 'classnames';
import styles from './app.module.css';
import { useSelect } from '../../hooks/useSelect';
import { TItem, testList } from '../../utils/data';
import Header from '../header/header';
import TodoList from '../todo-list/todo-list';
import AddBtn from '../buttons/add-btn/add-btn';
import Form from '../form/form';
import Input from '../input/input';
import Select from '../select/select';

const App = () => {
  const { selectedValue, valueList, handleSelect } = useSelect<TItem>(testList, "title");
  const nav = ['Пунктик 1', 'Пунктик 2', 'Пунктик 3', 'Пунктик 4'];

  return (
    <>
      <Header navList={nav} />

      <main className={cn(styles.main, styles.grid)}>
        <h1 className={styles.header}>Читальные планы</h1>

        <Form>
          <Input placeholder="Придумайте название списка..." />
          <AddBtn type="submit" icon='list'>Создать список</AddBtn>
        </Form>

        <Form>
          <Select name="list-name" value={selectedValue} options={valueList} onChange={handleSelect} />
          <Input placeholder="Что вы хотите добавить в список?.." />
          <AddBtn type='submit' icon='plus'>Добавить в список</AddBtn>
        </Form>



        <section className={cn(styles.grid, styles.lists_section)}>
          {testList.map((list) => (
            <TodoList key={list.id} title={list.title} list={list.items} />
          ))}
        </section>



      </main >
    </>

  )
}

export default App
