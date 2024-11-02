import { ElementType, ReactNode } from "react";

export type TType = "h1" | "h2" | "h3" | "text" | "inline";

export type TypographyProps = {
  hasMarginBottom?: boolean;
  hasOverflow?: boolean;
  children: ReactNode;
  extraClass?: string;
  marginBottom?: string;
  isError?: boolean;
  tag?: ElementType | string;
  type?: TType;
  typeArray?: {
    [key: string]: ElementType | string;
  };
};
