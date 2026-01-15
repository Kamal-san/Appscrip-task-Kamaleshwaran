import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/icons/logo.png" className={styles.logo} alt="logo" />
      </div>

      <div className={styles.center}>
        <h1>LOGO</h1>
        <nav className={styles.nav}>
          <a>SHOP</a>
          <a>SKILLS</a>
          <a>STORIES</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </nav>
      </div>
      <div className={styles.right}>
        <img src="/icons/search.png" alt="search" />
        <img src="/icons/heart.png" alt="wishlist" />
        <img src="/icons/user.png" alt="profile" />
        <img src="/icons/bag.png" alt="bag" />
        <div className={styles.lang}>ENG ▼</div>
      </div>

    </header>
  );
}
