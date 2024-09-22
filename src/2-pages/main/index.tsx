import { ItemForm, ListForm, TodoCard } from '../../3-widgets';
import { useGetTodoLists } from '../../5-entities';
import GridSection from '../../6-shared/ui/grid-section';
import GridListLayout from '../../6-shared/ui/grid-list-layout';
import Typography from '../../6-shared/ui/typography';
import { TList } from '../../6-shared/types';
import style from './style.module.css';


const MainPage = () => {
  const { data: todolists, isLoading } = useGetTodoLists();

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  const renderTodoList = (list: TList) => {
    return (
      <TodoCard listInfo={list} />
    )
  }

  return (
    <>
      {/* todo - сделать компонент заголовка header чтоб не задавать стили тут (вынести в app ?) */}
      <Typography type={'h1'} extraClass={style.header}>Тестовая версия</Typography>

      <GridSection ariaLabel='Добавление и дополнение списков'>
        <ListForm />

        <ItemForm />
      </GridSection>

      {/* <GridSection ariaLabel='Настройки'> </GridSection> */}

      <GridSection ariaLabel='Списки'>
        <GridListLayout
          data={todolists}
          renderItem={renderTodoList}
        />
      </GridSection>
    </>

  )
}

export default MainPage;