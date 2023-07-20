import Item from "./Item";
import data from "./data";
import styles from "./Creations.module.css";

const Creations = () => {
  return (
    <div>
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
  );
};
export default Creations;
