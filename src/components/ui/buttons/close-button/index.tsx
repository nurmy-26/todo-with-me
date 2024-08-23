import cn from 'classnames';
import style from './style.module.css';
import { XMarkIcon } from '../../icons/xmark-icon';


type CloseBtnProps = {
  extraClass?: string;
  onClose: any;
};

const CloseBtn = ({ extraClass, onClose }: CloseBtnProps) => {
  return (
    <button className={cn(style.close_btn, extraClass)} onClick={onClose}>
      <XMarkIcon type="white-circle" />
    </button>
  );
};

export default CloseBtn;