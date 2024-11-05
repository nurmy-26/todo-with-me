import List from '../../../../6-shared/ui/list';
import { TList } from '../../../../6-shared/types';
import { SkeletonLoaderCard, TodoCard } from '../../../todo-card';
import { getAverageSkeletonNumber } from '../../lib/getAverageSkeletonNumber';


type ListOfTodolistsProps = {
  isLoading?: boolean;
  data: TList[];
};

const ListOfTodolists = ({ isLoading, data }: ListOfTodolistsProps) => {
  const skeletonCards = getAverageSkeletonNumber(); // сколько рендерить во время загрузки

  const renderTodoList = (list: TList) => {
    return (
      <TodoCard listInfo={list} />
    )
  }

  return (
    <List
      isLoading={isLoading}
      skeletonLoader={{ component: <SkeletonLoaderCard />, count: skeletonCards }}
      data={data}
      renderItem={renderTodoList}
    />
  );
};

export default ListOfTodolists;