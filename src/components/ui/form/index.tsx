import cn from 'classnames';
import style from './style.module.css';


type FormProps = {
  children: React.ReactNode;
  extraClass?: string;
  onSubmit?: (event: React.FormEvent) => void;
};

const Form = ({ children, extraClass, onSubmit }: FormProps) => {
  return (
    <form
      className={cn(
        style.form,
        extraClass
      )}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;