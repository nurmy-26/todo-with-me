import cn from 'classnames';
import styles from './list-item.module.css';


type ListItemProps = {
  children: React.ReactNode;
  extraClass?: string;
};

const ListItem = ({ children, extraClass }: ListItemProps) => {
  return (
    // todo - заменить на норм теги, когда будет ясно содержимое
    <div className={cn(styles.item, extraClass)}>
      <p>Заглушка</p>
      <p>{children}</p>
    </div>
  );
};

export default ListItem;