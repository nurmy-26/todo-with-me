import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import style from "./style.module.css";
import ModalHeader from "./modal-header";
import ModalOverlay from "./modal-overlay";
import CloseBtn from "../ui/buttons/close-button";


type Props = {
  children: ReactNode;
  header?: string;
  onClose: () => void;
}

function Modal({ children, header, onClose }: Props) {
  // слушатель по Ecs
  React.useEffect(() => {
    const closeByEsc = (evt: KeyboardEvent | React.KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEsc);

    return () => { document.removeEventListener('keydown', closeByEsc) };
  }, []);

  return ReactDOM.createPortal(
    (
      <>
        <div className={style.modal}>
          <CloseBtn onClose={onClose} extraClass={style.close_modal} />
          {/* <ModalHeader onClose={onClose}>
            {header ? header : "# Info"}
          </ModalHeader> */}
          {children}
        </div>

        <ModalOverlay onClose={onClose} />
      </>
    ), document.getElementById("react-modals") as Element
  );
}

export default Modal;
