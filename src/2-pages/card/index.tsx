import { TodoCard } from '../../3-widgets';
import SinglePageLayout from '../../6-shared/ui/single-page-layout';

const CardPage = () => {
  return (
    <SinglePageLayout>
      <TodoCard type={'page'} />
    </SinglePageLayout>
  )
}

export default CardPage;