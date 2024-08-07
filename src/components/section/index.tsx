import cn from 'classnames';
import style from './style.module.css';

type SectionProps = {
  ariaLabel: string;
  children: React.ReactNode;
};

const Section = ({ ariaLabel, children }: SectionProps) => {
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

export default Section;