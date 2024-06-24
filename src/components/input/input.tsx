import React from 'react';
import styles from './input.module.css';
import cn from 'classnames';

type InputProps = {
  extraClass?: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ extraClass, placeholder, value, onChange }: InputProps) => {
  return (
    <input className={cn(styles.input, extraClass)} placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;