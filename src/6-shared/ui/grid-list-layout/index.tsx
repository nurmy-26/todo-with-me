import { ReactNode } from "react";
import cn from "classnames";
import style from './style.module.css';


type GridSectionLayoutProps = {
  label: string;
  mainContent: ReactNode;
  asideContent?: ReactNode;
  asideType?: 'left' | 'right';
  extraClass?: string
};

const GridSectionLayout = ({
  label,
  mainContent,
  asideContent,
  // расположение сайд-бара слева/справа
  asideType = 'left',
  extraClass,
}: GridSectionLayoutProps) => {
  const aside = (
    <aside className={style.aside}>
      {asideContent}
    </aside>
  );

  return (
    <section aria-label={label} className={cn(style.wrapper, extraClass)}>
      {asideContent && asideType === 'left' && aside}

      <div className={style.content}>{mainContent}</div>

      {asideContent && asideType === 'right' && aside}
    </section>
  )
};

export default GridSectionLayout;