import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import style from './style.module.css';
import Input from '../input';
import { PlusIcon } from '../icons/plus-icon';
import Button from '../button';
import { PaperPlaneIcon } from '../icons/paper-plane-icon';

type ExpandableInputProps = {
  extraClass?: string;
  baseIcon?: ReactNode;
  altIcon?: ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ExpandableInput = forwardRef<HTMLInputElement, ExpandableInputProps>(({
  extraClass,
  baseIcon = <PlusIcon />,
  altIcon = <PaperPlaneIcon isDark />,
  type = 'text',
  name,
  placeholder,
  value,
  disabled,
  onChange
}: ExpandableInputProps,
  ref
) => {
  const [isExpanded, setIsExpanded] = useState(false); // отслеживает был ли развернут компонент
  const [icon, setIcon] = useState(baseIcon); // хранит текущую иконку
  const wrapperRef = useRef<HTMLElement>(null);

  // по клику на кнопку компонент фиксирует состояние "развернут" и altIcon (и обратно)
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setIcon(isExpanded ? baseIcon : altIcon);
  };

  // объявляем обработчик кликов, который проверяет, был ли клик за пределами родительского div
  const handleOutsideClick = (event: MouseEvent) => {
    // второе условие - чтоб обработчик не срабатывал при клике по инпуту внутри div
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
      setIcon(baseIcon);
    }
  };

  // добавление и удаление обработчика handleOutsideClick
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={cn(style.wrapper, (isExpanded && style.wrapper_clicked))} ref={wrapperRef as React.RefObject<HTMLDivElement>}>
      <Button onClick={handleClick} icon={icon} size={'s'} extraClass={style.btn} />

      <Input
        extraClass={cn(style.input, extraClass)}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});

export default ExpandableInput;