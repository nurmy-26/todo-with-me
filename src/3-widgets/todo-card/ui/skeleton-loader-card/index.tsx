import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './style.module.css';
import { PropsWithChildren } from 'react';
import cn from 'classnames';

// 1 строка todo-list с чекбоксом
const SkeletonListRow = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={style.list_row}>
      <Skeleton width={24} height={24} />
      {children}
    </div>
  )
}

type SkeletonLoaderCardProps = {
  baseColor?: string;
  count?: number;
  highlightColor?: string;
  type?: 'card' | 'modal' | 'page';
}

const SkeletonLoaderCard = ({ baseColor, count = 8, highlightColor, type = 'card' }: SkeletonLoaderCardProps) => {
  return (
    <SkeletonTheme
      baseColor={baseColor ? baseColor : ""}
      highlightColor={highlightColor ? highlightColor : "var(--card-overlay)"}
    >
      <div className={cn(style.wrapper, style[type])}>
        <Skeleton height={type === 'page' ? '2rem' : '3rem'} containerClassName={style.header_container} />

        <div className={style.list_container}>
          {/* рендерятся ListRow в количестве равном count (8 по умолчанию) */}
          <Skeleton
            inline
            count={count}
            wrapper={SkeletonListRow}
            height={24}
          />
        </div>


        <div className={style.btn_container}>
          <Skeleton width={24} height={24} />
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default SkeletonLoaderCard;