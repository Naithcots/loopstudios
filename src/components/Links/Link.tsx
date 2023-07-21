import { motion } from "framer-motion";
import legacyStyles from "./Link.module.css";

type Props = {
  data: { idx: number; title: string };
  activeId: number | null;
  setActiveId: (id: number) => void;
  styles: CSSModuleClasses;
};

const Link = ({ styles, data, activeId, setActiveId }: Props) => {
  return (
    <motion.div layout className={legacyStyles["link-container"]}>
      <motion.a
        href="/"
        className={styles.link}
        onHoverStart={() => setActiveId(data.idx)}
        // onHoverEnd={() => setActiveLinkId(null)}
      >
        {data.title}
      </motion.a>
      {activeId === data.idx && (
        <motion.div
          className={styles["link-active"]}
          layoutId={`underline`}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};
export default Link;
