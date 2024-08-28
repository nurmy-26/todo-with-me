import cn from 'classnames';
import style from './style.module.css';


type ListItemProps = {
  checkboxComponent?: React.ReactNode;
  children?: React.ReactNode;
  removeComponent?: React.ReactNode;
  extraClass?: string;
};

const ListItem = ({ checkboxComponent, children, removeComponent, extraClass }: ListItemProps) => {
  return (
    <article className={cn(style.item, extraClass)}>
      {checkboxComponent}

      {children}

      {removeComponent}
    </article>
  );
};

export default ListItem;