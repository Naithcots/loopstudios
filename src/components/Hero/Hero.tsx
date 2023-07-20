import Header from "../Header/Header";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <Header />
      <div className={styles["text-wrapper"]}>
        <p className={styles.text}>Immersive experiences that deliver</p>
      </div>
    </div>
  );
};
export default Hero;
