import cn from 'classnames';
import styles from './collapsible-emojis.module.css';
import CollapsibleSection from '../collapsible-section';
import { useRadioButton } from '../../../hooks/useRadioButton';


type CollapsibleEmojisProps = {
  extraClass?: string;
  title?: string;
};

const CollapsibleEmojis = ({ title = 'Особая отметка', extraClass }: CollapsibleEmojisProps) => {
  const { selectedRadio, handleRadioChange } = useRadioButton<'option1' | 'option2' | 'none'>('none');

  // todo - добавить добавление тега (по клику) - это selectedRaio
  // todo - Добавить передаваемый через пропсы список тегов и рендер через map (value, checked)
  // todo - Добавить отдельный компонент RadioItem
  return (
    <CollapsibleSection title={title} extraClass={cn(styles.container, extraClass)}>
      <p className={styles.hint}>Вы можете выделить пункт списка особым эмодзи - он появится слева от элемента</p>
      <div className={styles.emojis_wrapper}>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedRadio === 'option1'}
            onChange={handleRadioChange}
          />
          ❗
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedRadio === 'option2'}
            onChange={handleRadioChange}
          />
          ❤️
        </label>
        <label>
          <input
            type="radio"
            value="none"
            checked={selectedRadio === 'none'}
            onChange={handleRadioChange}
          />
          None
        </label>
      </div>
    </CollapsibleSection>
  );
};

export default CollapsibleEmojis;