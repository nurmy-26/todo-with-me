import style from "./style.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={style.main}>
      {children}
    </main >
  )
}

export default MainLayout;