import styles from './header.module.css';


type HeaderProps = {
  navList: string[];
}

const Header = ({ navList }: HeaderProps) => {

  return (
    <header className={styles.header}>
      {/* контейнер для центрирования и ограничения ширины контента: */}
      <nav className={styles.content}>
        <ul className={styles.list}>
          {
            navList.map((item, index) => (<li className={styles.item} key={index}>{item}</li>))
          }
        </ul>
      </nav>
    </header>
  )
};

export default Header;
