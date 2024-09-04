import Button from '../../../6-shared/ui/button';
import { XMarkIcon } from '../../../6-shared/ui/icons/xmark-icon';


type CloseModalBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
};

const CloseModalBtn = ({ extraClass, onClick, ...rest }: CloseModalBtnProps) => {
  return (
    <Button
      icon={<XMarkIcon />}
      size={'s'}
      extraClass={extraClass}
      onClick={onClick}
      {...rest}
    >
    </Button>
  );
};

export default CloseModalBtn;