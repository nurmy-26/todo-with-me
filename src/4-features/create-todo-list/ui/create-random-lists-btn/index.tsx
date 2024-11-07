import { ButtonProps } from '../../../../6-shared/ui/button/type';
import Button from '../../../../6-shared/ui/button';
import { WandIcon } from '../../../../6-shared/ui/icons/wand-icon';
import { LoadingIcon } from '../../../../6-shared/ui/icons/loading-icon';
import { christmasTodolists } from '../../../../6-shared/const/christmas-todolists';
import { defaultTodolists } from '../../../../6-shared/const/default-todolists';
import { generateTodoListFromData } from '../../lib/generateTodoListFromData';
import { shuffleArray } from '../../lib/shuffleArray';
import { useCreateTodoList } from '../../model';


type CreateRandomListsBtnProps = ButtonProps & {
  customText?: string;
  disabled?: boolean;
  extraClass?: string;
  withText?: boolean;
};

const CreateRandomListsBtn = ({ customText, disabled, extraClass, withText, ...rest }: CreateRandomListsBtnProps) => {
  const { createTodoList, isLoading } = useCreateTodoList();

  // todo - добавить варианты для всех сезонов года и сделать зависимость от текущего месяца
  // собираем рандомный список из 1 сезонного 2 дефолтных
  const seasonList = shuffleArray(christmasTodolists).slice(0, 1);
  const randomList = shuffleArray(defaultTodolists).slice(0, 2);
  const lists = seasonList.concat(...randomList).map(item => generateTodoListFromData(item));

  // сохраняем их на сервер
  const handleCreateLists = async () => {
    await Promise.all(lists.map(item => createTodoList(item.title, item.items)));
  };

  const text = customText || 'Создать несколько списков';


  return (
    <Button
      aria-label={text}
      icon={isLoading ? <LoadingIcon /> : <WandIcon />}
      disabled={disabled}
      extraClass={extraClass}
      onClick={handleCreateLists}
      title={withText ? '' : text}
      {...rest}
    >
      {withText && text}
    </Button>
  );
};

export default CreateRandomListsBtn;