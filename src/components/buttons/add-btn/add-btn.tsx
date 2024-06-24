import cn from 'classnames';
import styles from './add-btn.module.css';


type AddBtnProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.FormEvent) => void;
};

const AddBtn = ({ children, type = 'button', onClick }: AddBtnProps) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default AddBtn;