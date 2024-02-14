import styles from "./skills.module.css";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiPython, SiFigma, SiMysql, SiGit, SiDocker } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <section className={styles.section} id="skills">
        <h3 className={styles.h3}>Skills</h3>
        <div className={styles.div}>
          <ul className={styles.ulRow}>
          <li className={styles.li}>
          <SiJavascript className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiHtml5 className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiCss3 className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiReact className={styles.img} />
          </li>
          <li className={styles.li}>
            < SiDocker className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiBootstrap className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiPython className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiFigma className={styles.img} />
          </li>
          <li className={styles.li} >
          <SiMysql className={styles.img} />
          </li>
          <li className={styles.li} >
          <SiGit className={styles.img} />
          </li>
          </ul>
        <ul className={styles.ul}>
          <li className={styles.li}>
          <SiJavascript className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiHtml5 className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiCss3 className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiReact className={styles.img} />
          </li>
          <li className={styles.li}>
            < SiDocker className={styles.img} />
          </li>
          </ul>
          <ul className={styles.ul}>
          <li className={styles.li}>
          <SiBootstrap className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiPython className={styles.img} />
          </li>
          <li className={styles.li}>
          <SiFigma className={styles.img} />
          </li>
          <li className={styles.li} >
          <SiMysql className={styles.img} />
          </li>
          <li className={styles.li} >
          <SiGit className={styles.img} />
          </li>
        </ul>
        </div>
      </section>
    </>
  );
}
