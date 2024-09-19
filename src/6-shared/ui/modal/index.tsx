import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { MODALS_ROOT_SELECTOR } from "../../../6-shared/const/routes";
import useEscape from "../../../6-shared/lib/useEscape";
import CloseBtn from "../button/close-btn";
import style from "./style.module.css";


type Props = {
  children: ReactNode;
  header?: string;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  const root = document.querySelector(MODALS_ROOT_SELECTOR);

  // по Ecs закрывать модалку
  useEscape(onClose);

  return ReactDOM.createPortal(
    (
      <>
        <div className={style.modal}>
          <CloseBtn onClick={onClose} extraClass={style.close_modal} />

          {children}
        </div>

        <div className={style.overlay} onClick={onClose}></div>
      </>
    ), root as Element
  );
}

export default Modal;