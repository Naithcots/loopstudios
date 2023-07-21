import Links from "../Links/Links";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Footer.module.css";
import linkStyles from "./Links.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.container}>
          <img
            src={`${import.meta.env.BASE_URL}/images/logo.svg`}
            alt="logo"
            className={styles.logo}
          />
          <nav className={styles.links}>
            <Links styles={linkStyles} />
          </nav>
          <div className={styles["social-logos"]}>
            <img
              src={`${import.meta.env.BASE_URL}/images/icon-facebook.svg`}
              alt="facebook"
              className={styles["social-logo"]}
            />
            <img
              src={`${import.meta.env.BASE_URL}/images/icon-twitter.svg`}
              alt="twitter"
              className={styles["social-logo"]}
            />
            <img
              src={`${import.meta.env.BASE_URL}/images/icon-pinterest.svg`}
              alt="pinterest"
              className={styles["social-logo"]}
            />
            <img
              src={`${import.meta.env.BASE_URL}/images/icon-instagram.svg`}
              alt="instagram"
              className={styles["social-logo"]}
            />
          </div>
          <p className={styles.text}>
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
