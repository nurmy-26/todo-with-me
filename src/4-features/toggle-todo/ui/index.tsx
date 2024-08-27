// import Button from '../../../6-shared/ui/button';
// import { CheckIcon } from '../../../6-shared/ui/icons/check-icon';
import style from './style.module.css';


type ToggleTodoBtnProps = {
  disabled?: boolean;
  extraClass?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.FormEvent) => void;
};

const ToggleTodoBtn = ({ disabled, extraClass, type = 'button', onClick }: ToggleTodoBtnProps) => {
  return (
    // <Button
    //   icon={<CheckIcon />}
    //   disabled={disabled}
    //   extraClass={extraClass}
    //   type={type}
    //   onClick={onClick}
    // >
    // </Button>

    // membership__form-label
    // membership__radio-input membership__radio-input_type_circle
    // text text_type_button membership__pseudo-el membership__pseudo-el_type_circle
    <label>
      <input className={style.checkbox} type="checkbox" name={checkboxName} value={checkboxValue} />
      <span>онлайн</span>
    </label>
  );
};

export default ToggleTodoBtn;