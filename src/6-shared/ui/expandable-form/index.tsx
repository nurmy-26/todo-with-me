import { FormEvent, forwardRef, ReactNode, RefObject, useRef, useState } from 'react';
import cn from 'classnames';
import { PlusIcon } from '../icons/plus-icon';
import { PaperPlaneIcon } from '../icons/paper-plane-icon';
import { LoadingIcon } from '../icons/loading-icon';
import { useInputRef } from '../../lib/useInputRef';
import useEscape from '../../lib/useEscape';
import useCombinedRefs from '../../lib/useCombinedRefs';
import { useOutsideClick } from '../../lib/useOutsideClick';
import Input from '../input';
import Button from '../button';
import style from './style.module.css';

type ExpandableFormProps = {
  extraClass?: string;
  baseIcon?: ReactNode;
  altIcon?: ReactNode;
  name: string;
  placeholder: string;
  disabled?: boolean;
  submitCallback: (inpValue: string) => Promise<void>;
  initValue?: string;
  btnVariant?: 'primary' | 'secondary' | 'tertiary';
};

const ExpandableForm = forwardRef<HTMLInputElement, ExpandableFormProps>(({
  extraClass,
  baseIcon = <PlusIcon />,
  altIcon = <PaperPlaneIcon isDark />,
  name,
  placeholder,
  disabled,
  submitCallback = () => new Promise((resolve) => setTimeout(resolve, 2000)),
  initValue = '',
  btnVariant = 'secondary'
}: ExpandableFormProps,
  forwardedRef
) => {
  const initialInputState = initValue;
  const [inputValue, setInputValue] = useState(initialInputState);
  const [isExpanded, setIsExpanded] = useState(false); // отслеживает был ли развернут компонент
  const [icon, setIcon] = useState(baseIcon); // хранит текущую иконку
  const [isDisabled, setIsDisabled] = useState(false); // состояние блокировки во время асинхронных действий
  const wrapperRef = useRef<HTMLElement>(null);
  const { inputRef: innerRef, activateInput } = useInputRef();
  const commonInputRef = useCombinedRefs<HTMLInputElement>(innerRef, forwardedRef);

  const expand = () => {
    setIsExpanded(true);
    setIcon(altIcon);
    // задержка нужна из-за анимации выезда инпута
    setTimeout(activateInput, 500);
  }
  const collapse = () => {
    setIsExpanded(false);
    setIcon(baseIcon);
  }
  const clear = () => {
    setInputValue(initialInputState);
  }

  // общая логика действия, привязанного к отправке формы
  const performAsyncAction = async () => {
    // на время действия включаем флажок isDisabled и меняем иконку
    setIsDisabled(true);
    setIcon(<LoadingIcon />);

    try {
      // тут главное действие, которое происходит при отправке формы (из пропса)
      await submitCallback(inputValue);
      collapse();
      clear();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // если еще не развернуто, фиксируем состояние "развернуто" и altIcon
    if (!isExpanded) {
      expand();
    } else if (isExpanded && inputValue !== '') {
      // если в момент нажатия на кнопку компонент развернут, вызываем некое действие (экшен/...)
      await performAsyncAction();
    }
  };

  const handleEsc = () => { // по нажатию на Esc
    collapse(); // свернуть (фокус с инпута снимается сам)
    clear();
  };

  useEscape(handleEsc, isExpanded); // вешаем обработчик Esc на input

  // обработчик кликов, который проверяет, был ли клик за пределами wrapper (вызовет collapse - свернуть)
  useOutsideClick(wrapperRef, collapse, isExpanded);

  // кнопка блокируется если компонент развернут и инпут пуст или по состоянию isDisabled
  const btnDisabledCondition = (isExpanded && inputValue === '') || isDisabled;
  // инпут блокируется по условию disabled из пропса или по состоянию isDisabled
  const inputDisabledCondition = disabled || isDisabled;

  return (
    <form onSubmit={handleSubmit} className={cn(style.form, extraClass)}>
      <div className={cn(style.wrapper, (isExpanded && style.wrapper_expanded))} ref={wrapperRef as RefObject<HTMLDivElement>}>
        <Button
          variant={btnVariant}
          type={'submit'}
          disabled={btnDisabledCondition}
          icon={icon}
          size={'s'}
          extraClass={style.btn}
        />

        <Input
          extraClass={style.input}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          disabled={inputDisabledCondition}
          onChange={(event) => setInputValue(event.target.value)}
          ref={commonInputRef}
        />
      </div>
    </form>
  );
});

export default ExpandableForm;