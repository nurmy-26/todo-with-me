import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteAllTodoListsBtn, useDeleteAllTodoLists } from '../../../4-features';
import { routes } from '../../../6-shared/const/routes';
import ConfirmationForm from '../../../6-shared/ui/confirmation-form';
import style from './style.module.css';


type ResetTodolistsConfirmationProps = {
  step: 'first' | 'second';
}

const ResetTodolistsConfirmation = ({ step }: ResetTodolistsConfirmationProps) => {
  const navigate = useNavigate();
  const { deleteAllTodoLists } = useDeleteAllTodoLists();


  const handleDelete = async (event: FormEvent) => {
    event.preventDefault();

    deleteAllTodoLists();
    navigate(routes.home); // после удаления возврат на главную
  }

  const isFirstStep = step === 'first';
  const actionText = isFirstStep ? "удалить" : "удалит";

  const btn = <DeleteAllTodoListsBtn
    type={isFirstStep ? 'button' : 'submit'}
    variant={'tertiary'}
    withText
    extraClass={style.delete_btn}
  />

  const submitButton = isFirstStep ? (
    // background задан, чтобы в подложке отображалась страничка home
    <Link to={routes.todolists.resetAllLists} state={{ background: routes.home }}>
      {btn}
    </Link>
  ) : btn;

  return (
    <ConfirmationForm
      step={step}
      actionText={actionText}
      subjectText={'все списки'}
      submitButton={submitButton}
      handleDelete={(event: FormEvent) => handleDelete(event)}
    />
  );
};

export default ResetTodolistsConfirmation;