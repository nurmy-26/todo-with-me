import cn from 'classnames';
import styles from './collapsible-tags.module.css';
import CollapsibleSection from '../collapsible-section';
import { useRadioButton } from '../../../hooks/useRadioButton';


type CollapsibleTagsProps = {
  extraClass?: string;
  title?: string;
};

const CollapsibleTags = ({ title = 'Выбрать теги', extraClass }: CollapsibleTagsProps) => {
  // todo - сделать хук useCheckbox
  // const { selectedCheckbox, handleCheckbox } = useCheckbox();

  // todo - добавить добавление тега (по клику)
  // todo - Добавить передаваемый через пропсы список тегов и рендер через map (value, checked)
  // todo - Добавить отдельный компонент RadioItem
  return (
    <CollapsibleSection title={title} extraClass={cn(styles.container, extraClass)}>
      <p className={styles.hint}>Вы можете отметить теги или добавить через запятую свои</p>
      <div className={styles.tags_wrapper}>
        <label>
          <input
            type="checkbox"
            value="option1"
            // checked={}
            // onChange={}
          />
          ❗
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
          />
          ❤️
        </label>
        <label>
          <input
            type="checkbox"
            value="none"
          />
          None
        </label>
      </div>
    </CollapsibleSection>
  );
};

export default CollapsibleTags;