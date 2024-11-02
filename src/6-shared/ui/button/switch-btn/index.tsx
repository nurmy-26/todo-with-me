import { ReactNode } from 'react';
import cn from 'classnames';
import { ButtonProps } from '../type';
import Button from '..';
import style from './style.module.css';


type SwitchBtnProps = ButtonProps & {
  options: {
    icon: ReactNode;
    label: ReactNode;
    conditionName: string;
  }[];
  sortName: string | null;
  onToggle: () => void;
  extraClass?: string;
};

const SwitchBtn = ({
  options,
  sortName,
  onToggle,
  extraClass,
  ...rest
}: SwitchBtnProps) => {
  const isFirstVariant = sortName === options[0].conditionName;

  return (
    <Button
      // если выбран первый вариант - рендерим второй, так как при клике будет выбран второй
      icon={isFirstVariant ? options[1].icon : options[0].icon}
      onClick={onToggle}
      extraClass={cn(style.switch_btn, extraClass)}
      {...rest}
    >

      {isFirstVariant ? options[1].label : options[0].label}
    </Button>
  );
}

export default SwitchBtn;