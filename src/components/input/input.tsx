import React from 'react';
import styles from './input.module.css';
import cn from 'classnames';

type InputProps = {
  extraClass?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ extraClass, type = 'text', name, placeholder, value, disabled, onChange }: InputProps) => {
  return (
    <input 
    className={cn(styles.input, extraClass)} 
    type={type}
    name={name}
    placeholder={placeholder} 
    value={value} 
    disabled={disabled}
    onChange={onChange} 
    />
  );
};

export default Input;