import style from "./style.module.css";

type ContentLayoutProps = {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <main className={style.content}>
      {children}
    </main >
  )
}

export default ContentLayout;