import style from "./style.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={style.overlay}>
      <main className={style.main}>
        {children}
      </main >
    </div>
  )
}

export default MainLayout;