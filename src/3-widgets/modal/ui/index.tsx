import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CloseModalBtn } from "../../../4-features";
import useEscape from "../../../6-shared/lib/useEscape";
import style from "./style.module.css";


type Props = {
  children: ReactNode;
  header?: string;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  // по Ecs закрывать модалку
  useEscape(onClose);

  return ReactDOM.createPortal(
    (
      <>
        <div className={style.modal}>
          <CloseModalBtn onClick={onClose} extraClass={style.close_modal} />

          {children}
        </div>

        <div className={style.overlay} onClick={onClose}></div>
      </>
    ), document.getElementById("react-modals") as Element
  );
}

export default Modal;