import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from './app.module.css';
import { useSelect } from '../../hooks/useSelect';
import { TItem, TList, testList } from '../../utils/data';
import Header from '../header/header';
import TodoList from '../todo-list/todo-list';
import AddBtn from '../buttons/add-btn/add-btn';
import Form from '../form/form';
import Input from '../input/input';
import Select from '../select/select';
import { useEffect, useState } from 'react';
import setDelay, { addItemToArrayInLocalStorage, loadFromLocalStorage, removeListItemFromLocalStorage, saveToLocalStorage, updateLocalStorageArray } from '../../utils/helpers';
import { useForm } from '../../hooks/useForm';
import { initialItemForm, initialListForm } from '../../utils/constants';
import { useLoading } from '../../hooks/useLoading';
import CollapsibleSection from '../collapsible-section/collapsible-section';
import CollapsibleTags from '../collapsible-section/collapsible-tags/collapsible-tags';

// todo - иконки "переместить" и "копировать" при наведении на каждый пункт (id остается тем же)
// если отмечается в одном списке - отмечается везде

// todo - отдельно сделать эмодзи (от 1 до 3 штук перед названием), отдельно - теги (например, по именам советчиков, активности и тд)

// todo - сделать в правом углу списка троеточие и выпадающий список (удалить, редактировать, ...)

const App = () => {
  // todo - сделать отдельную страницу с ОБЫЧНЫМИ, самыми простыми todo-Листами (где просто пункты string)
  // и таким образом проверить, насколько удобно масштабировать
  const [localState, setLocalState] = useState<TList[]>(loadFromLocalStorage('todo-lists') || testList);
  const nav = ['Пунктик 1', 'Пунктик 2', 'Пунктик 3', 'Пунктик 4'];
  // const localStorageList: TList[] = loadFromLocalStorage('todo-lists') || testList;
  const { loading, setLoading } = useLoading();

  const { values: listValues, setValues: setListValues, handleChange: handleListChange } = useForm(initialListForm);

  const { values: itemValues, setValues: setItemValues, handleChange: handleItemChange } = useForm(initialItemForm);
  const { selectedValue, valueList, handleSelect } = useSelect<TList>(localState, "title");

  // todo - вынести хендлеры в отдельное место для переиспользования
  const handleCreateList = async (event: React.FormEvent) => {
    event.preventDefault();

    // 1) * loader + блокировка кнопок ВКЛ
    setLoading(true);

    const list: TList = {
      id: uuidv4(),
      title: listValues['list-name'],
      items: [],
    }

    // 2) сохранить значение list
    updateLocalStorageArray('todo-lists', list);
    const content: TList[] = loadFromLocalStorage('todo-lists') || [];
    setLocalState(content);

    await setDelay(1000);

    // 3) очистить форму
    setListValues(initialListForm);

    // 4) * loader + блокировка кнопок ВЫКЛ
    setLoading(false);
  };

  const handleAddToList = async (event: React.FormEvent) => {
    event.preventDefault();

    // 1) * loader + блокировка кнопок ВКЛ
    setLoading(true);

    const listItem: TItem = {
      id: uuidv4(),
      title: itemValues['list-item-title'],
    }

    const selectedList = localState.find((item) => item.title === selectedValue);

    if (!selectedList) {
      console.error('No such list in local storage.');
      return;
    }
    const itemId = selectedList.id;

    // 2) сохранить значение listItem
    addItemToArrayInLocalStorage('todo-lists', itemId, listItem);
    const content: TList[] = loadFromLocalStorage('todo-lists') || [];
    setLocalState(content);

    await setDelay(1000);

    // 3) очистить форму
    setItemValues(initialItemForm);

    // 4) * loader + блокировка кнопок ВЫКЛ
    setLoading(false);
  };

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>, deletedItem: TItem, listTitle: string) => {
    event.preventDefault();
    console.log(deletedItem);

    setLoading(true);

    // найти в localStorage deletedItem по id и удалить
    const updatedTodoList: TList[] | null = removeListItemFromLocalStorage('todo-lists', deletedItem.id, listTitle);

    if (updatedTodoList !== null) {

      // подгружаем актуальный список
      const content: TList[] = loadFromLocalStorage('todo-lists') || [];
      // обновляем state
      setLocalState(content);
    }

    await setDelay(1000);

    setLoading(false);
  };

  // todo - по изменению store? переренден app ??
  useEffect(() => {
    // todo - УДАЛИТЬ!!! это временная команда пока тестирую (удаляет все данные из localStorage)
    // localStorage.clear();
    console.log('content');
    console.log(localState);

    if (loadFromLocalStorage('todo-lists') === null) {
      saveToLocalStorage('todo-lists', testList); // при монтировании загружаем в localStorage моковые данные
      console.log('loadFromLocalStorage');
      console.log(localState);
    }
  }, []);


  return (
    <>
      <Header navList={nav} />

      <main className={cn(styles.main, styles.grid)}>
        <h1 className={styles.header}>Читальные планы</h1>

        <section aria-label='Добавление и дополнение списков' className={cn(styles.grid, styles.lists_section)}>
          {/* ListForm */}
          <Form onSubmit={handleCreateList}>
            <Input
              name='list-name'
              placeholder="Придумайте название списка..."
              value={listValues['list-name']}
              disabled={loading}
              onChange={handleListChange}
            />
            <AddBtn type="submit" icon='list' disabled={loading}>{loading ? 'Загрузка...' : 'Создать список'}</AddBtn>
          </Form>

          {/* ItemForm */}
          <Form onSubmit={handleAddToList}>
            <Select
              name='list-name'
              value={selectedValue}
              options={valueList}
              disabled={loading}
              onChange={handleSelect}
            />

            <Input
              name='list-item-title'
              placeholder="Что вы хотите добавить в список?.."
              value={itemValues['list-item-title']}
              disabled={loading}
              onChange={handleItemChange}
            />
            <CollapsibleTags />
            <AddBtn type='submit' icon='plus' disabled={loading}>{loading ? 'Загрузка...' : 'Добавить в список'}</AddBtn>
          </Form>
        </section>


        <section aria-label='Настройки'></section>


        <section aria-label='Списки' className={cn(styles.grid, styles.lists_section)}>
          {localState.map((list) => (
            <TodoList key={list.id} title={list.title} list={list.items} onDelete={handleDelete} />
          ))}
        </section>



      </main >
    </>

  )
}

export default App
