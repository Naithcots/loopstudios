import type { Creation } from "../../../types.ts";
import styles from "./Item.module.css";

type Props = {
  data: Creation;
};

const Item = ({ data }: Props) => {
  return (
    <div className={styles.item}>
      <p className={styles.text}>{data.title}</p>
      <img
        src={data.images.small}
        alt="background"
        className={styles.background}
      />
    </div>
  );
};
export default Item;
