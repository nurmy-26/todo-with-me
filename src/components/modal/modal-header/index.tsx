import { XMarkIcon } from "../../icons/xmark-icon";
import style from "./style.module.css";


type Props = {
  children: string;
  onClose: () => void;
}

function ModalHeader({ children, onClose }: Props) {

  return (
    <div className={style.header}>
      <h2>{children}</h2>
      <button className={style.btn} onClick={onClose}>
        <XMarkIcon type="white-circle" />
      </button>
    </div>
  );
}

export default ModalHeader;
