import Item from "./Item";
import data from "./data";
import styles from "./Creations.module.css";
import Wrapper from "../Wrapper/Wrapper";

const Creations = () => {
  return (
    <Wrapper>
      <div className={styles.creations}>
        <h2 className={styles.title}>Our Creations</h2>
        <div className={styles.items}>
          {data.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
        <div className={styles["button-wrapper"]}>
          <button className={styles.button}>See All</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Creations;
