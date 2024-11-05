import { ReactNode } from 'react';
import cn from 'classnames';
import style from './style.module.css';


type CollapsibleDetailsProps = {
  children: ReactNode;
  extraClass?: string;
  title?: string;
  titleOverlay?: 'light' | 'dark' | 'none';
};

const CollapsibleDetails = ({ title, children, titleOverlay = 'none', extraClass }: CollapsibleDetailsProps) => {

  return (
    <details className={cn(style.details, extraClass)}>
      <summary className={cn(style.title, title && style[titleOverlay])}>{title}</summary>
      {children}
    </details>
  )
};

export default CollapsibleDetails;