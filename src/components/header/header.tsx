import styles from './header.module.css';


type HeaderProps = {
  navList: string[];
}

const Header = ({ navList }: HeaderProps) => {

  return (
    <header className={styles.header}>
      {/* контейнер для центрирования и ограничения ширины контента: */}
      <div className={styles.content}> 
        <nav>
          <ul className={styles.list}>
            {
              navList.map((item, index) => (<li className={styles.item} key={index}>{item}</li>))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
