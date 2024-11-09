import cn from 'classnames';
import Typography from '../../typography';
import { PawIcon } from '../../icons/paw-icon';
import style from './style.module.css';


type LogoTextProps = {
  type?: 'line' | 'square' | 'adaptive';
  extraClass?: string;
};

const LogoText = ({ type = 'adaptive', extraClass }: LogoTextProps) => {
  return (
    <Typography
      type={'h1'}
      extraClass={cn(
        style.text,
        style[type],
        extraClass
      )}
    >
      <span className={style.todo}>todo</span>
      <PawIcon className={cn(style.paw, style.paw_1)} hasShadow />
      <span className={style.with}>with</span>
      <PawIcon className={cn(style.paw, style.paw_2)} hasShadow />
      <span className={style.me}>me</span>
    </Typography>
  );
};

export default LogoText;