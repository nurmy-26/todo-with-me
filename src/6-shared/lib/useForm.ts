import { ChangeEvent, useState } from "react";


// кастомный хук для управления значениями инпутов формы (принимает объект с начальными значениями полей)
export const useForm = (inputValues: { [key: string]: string } = {}) => {
  const [values, setValues] = useState(inputValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return {
    values,
    setValues,
    handleChange
  };
};
