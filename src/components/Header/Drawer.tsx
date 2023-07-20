import styles from "./Drawer.module.css";
import { motion, Variants } from "framer-motion";

type Props = {
  toggleDrawer: () => void;
};

const drawerVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: { x: 0, transition: { duration: 0.2 } },
  exit: { x: "100%", transition: { duration: 0.2 } },
};

const Drawer = ({ toggleDrawer }: Props) => {
  return (
    <motion.nav
      className={styles.drawer}
      variants={drawerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles["drawer-top"]}>
        <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        <img
          src="/images/icon-close.svg"
          alt="close-menu"
          className={styles.close}
          onClick={toggleDrawer}
        />
      </div>
      <div className={styles.links}>
        <a href="/" className={styles.link}>
          about
        </a>
        <a href="/" className={styles.link}>
          careers
        </a>
        <a href="/" className={styles.link}>
          events
        </a>
        <a href="/" className={styles.link}>
          products
        </a>
        <a href="/" className={styles.link}>
          support
        </a>
      </div>
    </motion.nav>
  );
};
export default Drawer;
