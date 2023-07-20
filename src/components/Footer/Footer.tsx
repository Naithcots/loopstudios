import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo} />
      <nav className={styles.links}>
        <a href="/" className={styles.link}>
          About
        </a>
        <a href="/" className={styles.link}>
          Careers
        </a>
        <a href="/" className={styles.link}>
          Events
        </a>
        <a href="/" className={styles.link}>
          Products
        </a>
        <a href="/" className={styles.link}>
          Support
        </a>
      </nav>
      <div className={styles["social-logos"]}>
        <img
          src="/images/icon-facebook.svg"
          alt="facebook"
          className={styles["social-logo"]}
        />
        <img
          src="/images/icon-twitter.svg"
          alt="twitter"
          className={styles["social-logo"]}
        />
        <img
          src="/images/icon-pinterest.svg"
          alt="pinterest"
          className={styles["social-logo"]}
        />
        <img
          src="/images/icon-instagram.svg"
          alt="instagram"
          className={styles["social-logo"]}
        />
      </div>
      <div>
        <p className={styles.text}>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
