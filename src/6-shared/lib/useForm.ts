import { ChangeEvent, useState } from "react";

// кастомный хук для управления значениями инпутов формы (принимает объект с начальными значениями полей)
export const useForm = (initialInputValues: { [key: string]: string } = {}) => {
  const [values, setValues] = useState(initialInputValues);

  // управление содержимым input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
