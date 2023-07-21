import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <Wrapper>
        <div className={styles.container}>
          <Header />
          <div className={styles["text-wrapper"]}>
            <p className={styles.text}>
              Immersive
              <br />
              experiences
              <br />
              that
              <br />
              deliver
              <br />
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Hero;
