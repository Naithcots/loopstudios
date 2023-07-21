import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Links from "../Links/Links";
import Drawer from "./Drawer";
import styles from "./Header.module.css";
import linkStyles from "./Links.module.css";

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
        <img
          src={`${import.meta.env.BASE_URL}/images/logo.svg`}
          alt="logo"
          className={styles.logo}
        />
        <img
          src={`${import.meta.env.BASE_URL}/images/icon-hamburger.svg`}
          alt="hamburger-menu"
          className={styles.hamburger}
          onClick={toggleDrawer}
        />
        <nav className={styles["desktop-nav"]}>
          <Links styles={linkStyles} />
        </nav>
      </header>

      <AnimatePresence>
        {drawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
      </AnimatePresence>
    </>
  );
};
export default Header;
