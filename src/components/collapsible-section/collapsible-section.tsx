import cn from 'classnames';
import styles from './collapsible-section.module.css';


type CollapsibleSectionProps = {
  children: React.ReactNode;
  extraClass?: string;
  title?: string;
};

const CollapsibleSection = ({ title, children, extraClass }: CollapsibleSectionProps) => {

  return (
    <details className={cn(styles.details, extraClass)}>
      <summary>{title}</summary>
      {children}
    </details>
  )
};

export default CollapsibleSection;