import { ReactNode } from "react";
import cn from "classnames";
import style from './style.module.css';


type GridSectionLayoutProps = {
  label: string;
  mainContent: ReactNode;
  isStubNeeded?: boolean;
  stubComponent?: ReactNode;
  asideContent?: ReactNode;
  asideType?: 'left' | 'right';
  extraClass?: string
};

const GridSectionLayout = ({
  label,
  mainContent,
  isStubNeeded,
  stubComponent,
  asideContent,
  // расположение сайд-бара слева/справа
  asideType = 'left',
  extraClass,
}: GridSectionLayoutProps) => {
  const stub = stubComponent || null; // если заглушка не передана, на месте списка ничего не рендерится

  const aside = (
    <aside className={style.aside}>
      {asideContent}
    </aside>
  );

  return (
    <section aria-label={label} className={cn(style.wrapper, extraClass)}>
      {asideContent && asideType === 'left' && aside}

      {/* вместо mainContent можно отобразить переданную заглушку по условию isStubNeeded */}
      {isStubNeeded ? stub : <div className={style.content}>{mainContent}</div>}

      {asideContent && asideType === 'right' && aside}
    </section>
  )
};

export default GridSectionLayout;