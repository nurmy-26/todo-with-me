import cn from 'classnames';
import Typography from '..';
import { TypographyProps } from '../types';
import style from './style.module.css';


type LowcaseTitleProps = TypographyProps & {
  children: string;
  titleOverlay?: 'light' | 'dark' | 'none';
};

const LowcaseTitle = ({
  titleOverlay = 'none',
  children,
  extraClass,
  ...rest
}: LowcaseTitleProps) => {
  const lowcaseStr = children.toLowerCase();

  return (
    <Typography extraClass={cn(style.title, style[titleOverlay], extraClass)} {...rest}>
      {lowcaseStr}
    </Typography>
  )
}

export default LowcaseTitle;