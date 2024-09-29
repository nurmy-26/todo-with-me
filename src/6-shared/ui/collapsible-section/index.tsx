import { ReactNode } from 'react';
import cn from 'classnames';
import style from './style.module.css';


type CollapsibleSectionProps = {
  children: ReactNode;
  extraClass?: string;
  title?: string;
  titleOverlay?: 'light' | 'dark' | 'none';
};

const CollapsibleSection = ({ title, children, titleOverlay = 'none', extraClass }: CollapsibleSectionProps) => {

  return (
    <details className={cn(style.details, extraClass)}>
      <summary className={cn(style.title, title && style[titleOverlay])}>{title}</summary>
      {children}
    </details>
  )
};

export default CollapsibleSection;