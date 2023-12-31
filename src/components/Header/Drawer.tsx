import links from "../../data/links";
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
        <img
          src={`${import.meta.env.BASE_URL}/images/logo.svg`}
          alt="logo"
          className={styles.logo}
        />
        <img
          src={`${import.meta.env.BASE_URL}/images/icon-close.svg`}
          alt="close-menu"
          className={styles.close}
          onClick={toggleDrawer}
        />
      </div>
      <div className={styles.links}>
        {links.map((link, idx) => (
          <a href="/" key={idx} className={styles.link}>
            {link.title}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
export default Drawer;
