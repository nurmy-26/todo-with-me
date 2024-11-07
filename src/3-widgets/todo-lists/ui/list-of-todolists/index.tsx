import List from '../../../../6-shared/ui/list';
import { TList } from '../../../../6-shared/types';
import { SkeletonLoaderCard, TodoCard } from '../../../todo-card';
import { getAverageSkeletonNumber } from '../../lib/getAverageSkeletonNumber';
import TodolistsStub from '../todolists-stub';


type ListOfTodolistsProps = {
  isLoading?: boolean;
  initialData: TList[];
  renderedData: TList[];
};

const ListOfTodolists = ({ isLoading, initialData, renderedData }: ListOfTodolistsProps) => {
  const skeletonCards = getAverageSkeletonNumber(); // сколько рендерить во время загрузки
  const isInitialDataEmpty = initialData.length === 0; // если список пуст, рендерим другую заглушку

  const renderTodoList = (list: TList) => {
    return (
      <TodoCard listInfo={list} />
    )
  }

  return (
    <List
      isLoading={isLoading}
      isStubNeeded={isInitialDataEmpty}
      stubComponent={<TodolistsStub />}
      skeletonLoader={{ component: <SkeletonLoaderCard />, count: skeletonCards }}
      data={renderedData}
      renderItem={renderTodoList}
    />
  );
};

export default ListOfTodolists;