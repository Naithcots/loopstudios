import { useState } from "react";
import Drawer from "./Drawer";
import styles from "./Header.module.css";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    if (drawerOpen) document.body.classList.remove("no-scroll");
    else document.body.classList.add("no-scroll");
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        <img
          src="/images/icon-hamburger.svg"
          alt="hamburger-menu"
          className={styles.hamburger}
          onClick={toggleDrawer}
        />
      </header>

      <AnimatePresence>
        {drawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
      </AnimatePresence>
    </>
  );
};
export default Header;
