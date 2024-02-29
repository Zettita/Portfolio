import { SiLinkedin, SiGithub, SiGmail   } from "react-icons/si";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <h2 className={styles.h2}>Contacto</h2>
      <ul className={styles.ul}>
        <li className={styles.li}><SiLinkedin className={styles.svg}  /><a target="_blank" rel="noopener noreferrer" className={styles.a} href="https://www.linkedin.com/in/urielsolnik/"> Linkedin</a></li>
        <li className={styles.li}><SiGmail className={styles.svg} /><a target="_blank" rel="noopener noreferrer" className={styles.a} href="mailto:uriel.solnik@gmail.com"> Gmail</a></li>
        <li className={styles.li}><SiGithub className={styles.svg} /><a target="_blank" rel="noopener noreferrer" className={styles.a} href="https://github.com/Zettita"> GitHub</a></li>
      </ul>
      <span className={styles.span}>© 2024 Uriel Eduardo Solnik.  All rights reserved.</span>

    </footer>
  )
}
