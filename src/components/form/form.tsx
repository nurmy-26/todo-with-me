import cn from 'classnames';
import styles from './form.module.css';


type FormProps = {
  children: React.ReactNode;
  extraClass?: string;
  onSubmit?: (event: React.FormEvent) => void;
};

const Form = ({ children, extraClass, onSubmit }: FormProps) => {
  return (
    <form className={cn(
      styles.form,
      extraClass
    )} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;