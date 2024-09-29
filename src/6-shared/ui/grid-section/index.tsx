import { ReactNode } from 'react';
import cn from 'classnames';
import style from './style.module.css';


type GridSectionProps = {
  ariaLabel: string;
  children: ReactNode;
};

const GridSection = ({ ariaLabel, children }: GridSectionProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        style.grid_parent,
        style.grid_child_full
      )}
    >

      {children}
    </section>
  )
}

export default GridSection;