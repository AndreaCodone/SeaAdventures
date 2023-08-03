import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} title="Sea Adventures">
        <a>
          <img src="/images/logo.svg" alt="Sea Adventures" />
        </a>
      </div>
    </header>
  );
};

export default Header;
