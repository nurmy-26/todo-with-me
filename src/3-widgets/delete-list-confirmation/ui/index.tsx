import { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteListBtn } from '../../../4-features';
import { useDeleteTodoList, useGetTodoLists } from '../../../5-entities';
import { routes } from '../../../6-shared/const/routes';
import { TItem, TList } from '../../../6-shared/types';
import ConfirmationForm from '../../../6-shared/ui/confirmation-form';
import style from './style.module.css';


const DeleteListConfirmation = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // извлекаем id из url
  const { deleteList } = useDeleteTodoList();
  const { data, isLoading } = useGetTodoLists();

  const listInfo: TList = data.find((item: TItem) => item.id === id);

  const handleDelete = async (event: FormEvent, listId: string) => {
    event.preventDefault();
    deleteList(listId);

    navigate(routes.home); // после удаления возврат на главную
  }

  return (
    <ConfirmationForm
      isLoading={isLoading}
      actionText={'удалить список'}
      subjectText={listInfo?.title}
      submitButton={
        <DeleteListBtn
          type={'submit'}
          size='m'
          extraClass={style.delete_btn}
        />
      }
      handleDelete={(event: FormEvent) => handleDelete(event, listInfo.id)}
    />
  );
};

export default DeleteListConfirmation;