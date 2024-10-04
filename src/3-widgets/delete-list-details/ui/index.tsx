import { FormEvent, MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteListBtn } from '../../../4-features';
import { useDeleteTodoList, useGetTodoLists } from '../../../5-entities';
import { routes } from '../../../6-shared/const/routes';
import { TItem, TList } from '../../../6-shared/types';
import Typography from '../../../6-shared/ui/typography';
import Button from '../../../6-shared/ui/button';
import style from './style.module.css';


const DeleteListDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // извлекаем id из url
  const { deleteList } = useDeleteTodoList();
  const { data, isLoading } = useGetTodoLists();

  const listInfo: TList = data.find((item: TItem) => item.id === id);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!listInfo) {
    return <Typography>Error!</Typography>
  }

  const handleDelete = async (event: FormEvent) => {
    event.preventDefault();
    deleteList(listInfo.id);

    navigate(routes.home); // после удаления возврат на главную
  }

  const handleCancel = () => {
    navigate(-1); // возврат на предыдущую
  }

  return (
    <form onSubmit={handleDelete}>
      {/* todo - выделить в компонент подтверждения ? (Вы уверены, что *** *** ?) */}
      <Typography tag={'p'} type={'h2'} extraClass={style.text} hasMarginBottom>
        Вы уверены, что хотите удалить список <span className={style.title}>&laquo;{listInfo.title}&raquo;</span>?
      </Typography>

      <div className={style.buttons}>
        <DeleteListBtn
          type={'submit'}
          size='m'
          onClick={(event: MouseEvent<HTMLButtonElement>) => handleDelete(event)}
          extraClass={style.delete_btn}
        />

        <Button variant={'primary'} onClick={handleCancel}>Отмена</Button>
      </div>

    </form>
  );
};

export default DeleteListDetails;