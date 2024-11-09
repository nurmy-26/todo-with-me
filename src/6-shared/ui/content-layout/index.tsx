import { ReactNode } from "react";
import style from "./style.module.css";

type ContentLayoutProps = {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className={style.content}>
      {children}
    </div >
  )
}

export default ContentLayout;