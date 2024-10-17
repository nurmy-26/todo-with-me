import { ButtonHTMLAttributes, FormEvent } from "react";
import Button from "..";
import { XMarkIcon } from "../../icons/xmark-icon";


type CloseBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  extraClass?: string;
  onClick?: (event: FormEvent) => void;
};

const CloseBtn = ({ extraClass, onClick, ...rest }: CloseBtnProps) => {
  return (
    <Button
      aria-label={'Закрыть'}
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