import imagen from "./logo.webp";
import styles from "./skills.module.css";

export default function Skills() {
  return (
    <>
      <section className={styles.section} id="skills">
        <h2 className={styles.h2}>Skills</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <img className={styles.img} src={imagen} alt="logo Default" />
          </li>
          <li className={styles.li}>
            <img className={styles.img} src={imagen} alt="logo Default" />
          </li>
          <li className={styles.li}>
            <img className={styles.img} src={imagen} alt="logo Default" />
          </li>
          <li className={styles.li}>
            <img className={styles.img} src={imagen} alt="logo Default" />
          </li>
          <li className={styles.li}>
            <img className={styles.img} src={imagen} alt="logo Default" />
          </li>
          <li className={styles.li}>
            <img className={styles.img} src={imagen} alt="logo Default" />
          </li>
        </ul>
      </section>
    </>
  );
}
