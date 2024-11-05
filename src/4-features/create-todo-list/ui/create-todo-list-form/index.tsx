import { FormEvent, useState } from 'react';
import Button from '../../../../6-shared/ui/button';
import Input from '../../../../6-shared/ui/input';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { PlusIcon } from '../../../../6-shared/ui/icons/plus-icon';
import { useCreateTodoList } from '../../model';
import style from './style.module.css';


const CreateTodoListForm = () => {
  const { createTodoList, isLoading } = useCreateTodoList();
  const initialInputState = '';
  const [inputValue, setInputValue] = useState(initialInputState);

  const clear = () => {
    setInputValue(initialInputState);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await createTodoList(inputValue);
    clear();
  }

  // кнопка блокируется если инпут пуст или идет отправка значения на сервер
  const btnDisabledCondition = inputValue === '' || isLoading;


  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Button
        aria-label={'Добавить в список'}
        variant={'tertiary'}
        type={'submit'}
        disabled={btnDisabledCondition}
        icon={isLoading ? <LoadingIcon /> : <PlusIcon />}
        size={'xs'}
        extraClass={style.btn}
      />

      <Input
        shape={'line'}
        name={'list-title'}
        placeholder={'Придумайте название списка...'}
        value={inputValue}
        disabled={isLoading}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
};

export default CreateTodoListForm;