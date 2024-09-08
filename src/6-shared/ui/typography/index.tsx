import { ElementType, ReactNode } from 'react';
import cn from 'classnames';
import style from './style.module.css';


type TType = 'h1' | 'h2' | 'h3' | 'text';

type TypographyProps = {
  hasMarginBottom?: boolean;
  hasOverflow?: boolean;
  children: ReactNode;
  extraClass?: string;
  marginBottom?: string;
  tag?: ElementType | string;
  type?: TType;
  typeArray?: {
    [key: string]: ElementType | string;
  };
};

const Typography = ({
  hasMarginBottom = false,
  hasOverflow = false,
  children,
  extraClass,
  marginBottom,
  tag,
  type = 'text',
  // соотнесение с тегами для стандартных стилей (можно передать своё соотнесение)
  typeArray = {
    h1: 'h1',
    h2: 'h2',
    text: 'p',
    // subtitle: 'p'
  }
}: TypographyProps) => {
  // если тег должен отличаться от визуального представления, можно прямо его указать (приоритетнее, чем type)
  const Tag = tag || typeArray[type];

  const className = cn(
    style.common,
    style[type],
    hasOverflow && style.overflow,
    extraClass
  );

  // по умолчанию margin-bottom: 0, если указан hasMarginBottom - 40px, если указан еще и пропс marginBottom - то равен его значению
  const margin = {
    marginBottom: hasMarginBottom ? (marginBottom || '40px') : '0px'
  };

  return (
    <Tag className={className} style={margin}>
      {children}
    </Tag>
  )
};

export default Typography;
