import { useNavigate, useParams } from 'react-router-dom';
import { DeleteListBtn } from '../../../4-features';
import { useDeleteTodoList, useGetTodoLists } from '../../../5-entities';
import { routes } from '../../../6-shared/const/routes';
import Typography from '../../../6-shared/ui/typography';
import { TItem, TList } from '../../../6-shared/types';
import style from './style.module.css';
import Button from '../../../6-shared/ui/button';


const DeleteListDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // извлекаем id из url
  const { deleteList } = useDeleteTodoList();
  const { data, isLoading } = useGetTodoLists();

  // todo - доделать, убрать лишнее
  if (!id) {
    return null
  }

  const listInfo: TList = data.find((item: TItem) => item.id === id);

  console.log(listInfo)

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!listInfo) {
    return <Typography>Error!</Typography>
  }

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    deleteList(listInfo.id);

    navigate(routes.home); // после удаления возврат на главную
  }

  const handleCancel = () => {
    navigate(-1); // возврат на предыдущую
  }

  return (
    <form onSubmit={handleDelete}>
      <Typography type={'h2'} hasMarginBottom>
        Вы уверены, что хотите удалить список <span className={style.title}>&laquo;{listInfo.title}&raquo;</span>?
      </Typography>

      <div className={style.buttons}>
        <DeleteListBtn
          type={'submit'}
          size='m'
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)}
          extraClass={style.delete_btn}
        />

        <Button variant={'primary'} onClick={handleCancel}>Отмена</Button>
      </div>

    </form>
  );
};

export default DeleteListDetails;