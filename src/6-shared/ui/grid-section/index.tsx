import cn from 'classnames';
import style from './style.module.css';
import Typography from '../typography';
import { useState } from 'react';
import Button from '../button';
import { ChevronIcon } from '../icons/chevron';

type GridSectionProps = {
  ariaLabel: string;
  children: React.ReactNode;
  title?: string;
};

// todo - переделать компонент
const GridSection = ({ ariaLabel, children, title }: GridSectionProps) => {
  const initialState = true;
  const [isShown, setIsShown] = useState(initialState);

  const toggleSection = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShown(!isShown);
  };

  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        style.grid_parent,
        style.grid_child_full
      )}
    >
      <header className={style.header}>
        {title && <Typography type={'h2'} extraClass={style.title}>{title}</Typography>}

        <Button
          onClick={toggleSection}
          size={'s'}
          variant={'tertiary'}
          icon={<ChevronIcon type={isShown ? 'down' : 'right'} />}
        >
        </Button>
      </header>


      {isShown && children}
    </section>
  )
}

export default GridSection;