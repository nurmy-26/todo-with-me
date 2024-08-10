import style from "./style.module.css";


type ModalOverlayProps = {
  onClose: () => void;
}

function ModalOverlay({ onClose }: ModalOverlayProps) {

  return (
    <div className={style.overlay} onClick={onClose}></div>
  );
}

export default ModalOverlay;
