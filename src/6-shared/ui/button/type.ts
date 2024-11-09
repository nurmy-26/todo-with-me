import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  disabled?: boolean;
  extraClass?: string;
  icon?: ReactNode;
  size?: "xs" | "s" | "m";
  shape?: "default" | "rounded";
  variant?: "primary" | "secondary" | "tertiary";
  isInline?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
