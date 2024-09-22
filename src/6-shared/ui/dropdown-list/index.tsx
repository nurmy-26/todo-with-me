import { ReactNode, useRef, useState } from 'react';
import cn from 'classnames';
import { useOutsideClick } from '../../lib/useOutsideClick';
import { MenuIcon } from '../icons/menu-icon';
import Button from '../button';
import style from './style.module.css';


type DropdownListProps = {
  extraClass?: string;
  list: ReactNode[];
};

const DropdownList = ({
  extraClass,
  list,
}: DropdownListProps) => {
  const initialState = false;
  const [isShown, setIsShown] = useState(initialState);
  const wrapperRef = useRef<HTMLElement>(null);


  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShown(!isShown);
  };

  // клик вне области также должен схлопывать меню
  useOutsideClick(wrapperRef, () => setIsShown(initialState), isShown);

  return (
    <div className={cn(style.wrapper, extraClass)} ref={wrapperRef as React.RefObject<HTMLDivElement>}>
      <Button variant={'tertiary'} icon={<MenuIcon />} size={'s'} extraClass={style.btn} onClick={toggleMenu} />

      {/* выпадающий список */}
      {isShown &&
        <ul className={style.list}>
          {list.map((item: ReactNode, index: number) =>
            <li key={index} className={style.item}>
              {item}
            </li>
          )}
        </ul>}
    </div>
  );
};

export default DropdownList;