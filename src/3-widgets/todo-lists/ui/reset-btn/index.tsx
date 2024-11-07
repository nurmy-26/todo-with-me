import { XMarkIcon } from '../../../../6-shared/ui/icons/xmark-icon';
import useResponsive from '../../../../6-shared/lib/hooks/useResponsive';
import Button from '../../../../6-shared/ui/button';


type ResetBtnProps = {
  handleReset: () => void;
}

const ResetBtn = ({ handleReset }: ResetBtnProps) => {
  const isMobile = useResponsive(); // true до 550px

  // от 550px и ниже будет отображаться с текстом
  return (
    <Button
      aria-label={'Сбросить сортировку и фильтры'}
      title={'Сбросить сортировку и фильтры'}
      variant={'tertiary'}
      icon={<XMarkIcon />}
      onClick={handleReset}
    >
      {isMobile ? "Сбросить" : ""}
    </Button>
  );
};


export default ResetBtn;

