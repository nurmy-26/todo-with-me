import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import style from './style.module.css';
import Input from '../input';
import { PlusIcon } from '../icons/plus-icon';
import Button from '../button';
import { PaperPlaneIcon } from '../icons/paper-plane-icon';
import { XMarkIcon } from '../icons/xmark-icon';

type ExpandableInputProps = {
  extraClass?: string;
  baseIcon?: ReactNode;
  altIcon?: ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  isLoading?: boolean;
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
  isLoading,
  onChange
}: ExpandableInputProps,
  ref
) => {
  const [isExpanded, setIsExpanded] = useState(false); // отслеживает был ли развернут компонент
  const [icon, setIcon] = useState(baseIcon); // хранит текущую иконку
  const [isDisabled, setIsDisabled] = useState(isLoading);
  const wrapperRef = useRef<HTMLElement>(null);

  // 
  const performAsyncAction = async () => {
    setIsDisabled(true);
    setIcon(<XMarkIcon />); // todo - заменить на loding icon

    try {
      // тут главное действие (передается через пропс, так как может быть разным)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // пример

      // в случае успеха
      setIsExpanded(false);
      setIcon(baseIcon);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDisabled(false);
    }
  };


  // по клику на кнопку компонент фиксирует состояние "развернут" и altIcon (и обратно)
  const handleClick = async () => {
    if (isDisabled) return;

    if (!isExpanded) {
      setIsExpanded(true);
      setIcon(altIcon);
    } else {
      // если в момент нажатия на кнопку компонент развернут, вызываем некое действие (экшен/...)
      await performAsyncAction();
    }
  };

  // объявляем обработчик кликов, который проверяет, был ли клик за пределами родительского div
  const handleOutsideClick = (event: MouseEvent) => {
    // второе условие - чтоб обработчик не срабатывал при клике по инпуту внутри div
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      if (!isDisabled) {
        setIsExpanded(false);
        setIcon(baseIcon);
      }
    }
  };

  // добавление и удаление обработчика handleOutsideClick
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // todo - добавить состояние инпута и отправку формы
  const btnDisabledCondition = isExpanded && value === ''; // не работает
  const inputDisabledCondition = disabled || !isExpanded || isDisabled;

  return (
    <div className={cn(style.wrapper, (isExpanded && style.wrapper_clicked))} ref={wrapperRef as React.RefObject<HTMLDivElement>}>
      <Button disabled={btnDisabledCondition} onClick={handleClick} icon={icon} size={'s'} extraClass={style.btn} />

      <Input
        extraClass={cn(style.input, extraClass)}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={inputDisabledCondition}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});

export default ExpandableInput;