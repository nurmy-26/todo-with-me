import Button from "..";
import { XMarkIcon } from "../../icons/xmark-icon";


type CloseBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  extraClass?: string;
  onClick?: (event: React.FormEvent) => void;
};

const CloseBtn = ({ extraClass, onClick, ...rest }: CloseBtnProps) => {
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

export default CloseBtn;