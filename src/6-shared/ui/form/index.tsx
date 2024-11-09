import { FormEvent, ReactNode } from 'react';
import cn from 'classnames';
import Typography from '../typography';
import style from './style.module.css';


type FormProps = {
  children: ReactNode;
  extraClass?: string;
  onSubmit?: (event: FormEvent) => void;
  title?: string;
};

const Form = ({ children, extraClass, onSubmit, title = 'aafaf' }: FormProps) => {
  return (
    <div className={cn(
      style.wrapper,
      extraClass
    )}>
      {title && <Typography type={'h3'} extraClass={style.title}>{title}</Typography>}
      <form
        className={style.form}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default Form;