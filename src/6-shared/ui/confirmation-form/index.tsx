import { FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import cn from 'classnames';
import Typography from '../../../6-shared/ui/typography';
import Button from '../../../6-shared/ui/button';
import style from './style.module.css';


type ConfirmationFormProps = {
  isLoading?: boolean;
  baseColor?: string;
  highlightColor?: string;
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
  actionText,
  hasAccent,
  subjectText,
  submitButton,
  handleDelete,
  extraClass
}: ConfirmationFormProps) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); // возврат на предыдущую
  }

  const actText = hasAccent ? <strong>{actionText}</strong> : actionText;

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
              Вы уверены, что хотите {actText}{subjectText && <span className={style.title}> &laquo;{subjectText}&raquo;</span>}?
            </Typography>

            <div className={style.buttons}>
              {/* в кнопку передавать тот же handleDelete */}
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