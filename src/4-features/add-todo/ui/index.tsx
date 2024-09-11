// import Button from '../../../6-shared/ui/button';
// import { PlusIcon } from '../../../6-shared/ui/icons/plus-icon';


// type TodoAddBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   disabled?: boolean;
//   isLoading?: boolean;
//   extraClass?: string;
//   onClick?: (event: React.FormEvent) => void;
// };

// const TodoAddBtn = ({ disabled, isLoading, extraClass, onClick, ...rest }: TodoAddBtnProps) => {
//   return (
//     <Button
//       icon={<PlusIcon />}
//       disabled={disabled}
//       extraClass={extraClass}
//       onClick={onClick}
//       {...rest}
//     >
//       {isLoading ? 'Загрузка...' : 'Добавить в список'}
//     </Button>
//   );
// };

// export default TodoAddBtn;
export { default as TodoAddBtn } from './todo-add-btn';