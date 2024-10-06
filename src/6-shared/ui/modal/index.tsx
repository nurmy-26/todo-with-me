import { ReactNode } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import { MODALS_ROOT_SELECTOR } from "../../../6-shared/const/routes";
import useEscape from "../../../6-shared/lib/hooks/useEscape";
import CloseBtn from "../button/close-btn";
import style from "./style.module.css";


type Props = {
  children: ReactNode;
  header?: string;
  onClose: () => void;
  position?: 'center' | 'left' | 'right';
}

const Modal = ({ children, onClose, position = 'center' }: Props) => {
  const root = document.querySelector(MODALS_ROOT_SELECTOR);

  // по Ecs закрывать модалку
  useEscape(onClose);

  const styleAside = cn(style.aside, style[position]);

  return ReactDOM.createPortal(
    (
      <>
        <div className={cn(
          style.modal,
          position === 'center' ? style[position] : styleAside
        )}>
          <CloseBtn onClick={onClose} extraClass={style.close_modal} />

          {children}
        </div>

        <div className={cn(style.overlay, position !== 'center' && style.light)} onClick={onClose}></div>
      </>
    ), root as Element
  );
}

export default Modal;