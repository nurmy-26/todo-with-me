import { ChangeEvent, useState } from "react";

// кастомный хук для управления значениями инпутов формы (принимает объект с начальными значениями полей)
export const useForm = (initialInputValues: { [key: string]: string } = {}) => {
  const [values, setValues] = useState(initialInputValues);

  // управление содержимым input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // ф-я сброса формы до начальных значений
  const clearForm = () => {
    setValues(initialInputValues);
  };

  return {
    values,
    setValues,
    handleChange,
    clearForm,
  };
};
