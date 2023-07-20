import styles from "./Leader.module.css";

const Leader = () => {
  return (
    <div className={styles.leader}>
      <img src="/images/mobile/image-interactive.jpg" alt="" />
      <h2 className={styles.title}>The leader in interactive VR</h2>
      <p className={styles.paragraph}>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  );
};
export default Leader;
