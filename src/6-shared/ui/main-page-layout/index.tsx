import { ReactNode } from 'react';
import cn from 'classnames';
import style from './style.module.css';


type MainPageLayoutProps = {
  children: ReactNode;
  asideContent?: ReactNode;
  asideType?: 'left' | 'right';
  extraClass?: string;
}

const MainPageLayout = ({ children, asideContent, asideType = 'left', extraClass }: MainPageLayoutProps) => {
  const mainContent = (
    <main className={style.main}>
      {children}
    </main>
  );

  const aside = (
    <aside className={style.aside}>
      {asideContent}
    </aside>
  )

  return asideContent ?
    (
      <div className={cn(style.wrapper, extraClass)}>
        {asideType === 'left' && aside}

        {mainContent}

        {asideType === 'right' && aside}
      </div>
    )
    :
    mainContent
}

export default MainPageLayout;