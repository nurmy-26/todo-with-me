import { FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import cn from 'classnames';
import Typography from '../../../6-shared/ui/typography';
import Button from '../../../6-shared/ui/button';
import style from './style.module.css';
import { routes } from '../../const/routes';


type ConfirmationFormProps = {
  isLoading?: boolean;
  baseColor?: string;
  highlightColor?: string;
  step?: 'first' | 'second';
  actionText: string;
  hasAccent?: boolean;
  subjectText?: string;
  submitButton: ReactNode;
  handleDelete: (event: FormEvent) => Promise<void>;
  extraClass?: string;
}

const ConfirmationForm = ({
  isLoading,
  baseColor,
  highlightColor,
  step = 'first',
  actionText,
  hasAccent,
  subjectText,
  submitButton,
  handleDelete,
  extraClass
}: ConfirmationFormProps) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (isFirstStep) {
      navigate(-1); // возврат на предыдущую
    } else {
      navigate(routes.home); // возврат на предыдущую
    }
  }

  const isFirstStep = step === 'first';
  const text = isFirstStep ? "Вы уверены, что хотите " : "Вы точно уверены? Это действие безвозвратно ";
  const actText = hasAccent ? <strong>{actionText}</strong> : actionText;
  const sign = isFirstStep ? "?" : "!";

  return (
    <form onSubmit={handleDelete} className={cn(style.form, extraClass)}>
      {/* пока данные загружаются, рендерится Skeleton Loader */}
      {isLoading ? (
        <SkeletonTheme
          baseColor={baseColor ? baseColor : ""}
          highlightColor={highlightColor ? highlightColor : "var(--card-overlay)"}
        >
          <Skeleton height={'2rem'} />

          <div className={style.buttons}>
            <Skeleton width={'7rem'} height={40} />
            <Skeleton width={'7rem'} height={40} />
          </div>
        </SkeletonTheme>
      )
        :
        (
          <>
            <Typography tag={'p'} type={'h2'} extraClass={style.text}>
              {text}{actText}{subjectText && <span className={style.title}> {subjectText}</span>}{sign}
            </Typography>

            <div className={style.buttons}>
              {/*кнопка должна быть с типом "submit" */}
              {submitButton}

              <Button variant={'primary'} onClick={handleCancel}>Отмена</Button>
            </div>
          </>
        )
      }
    </form >
  );
};

export default ConfirmationForm;