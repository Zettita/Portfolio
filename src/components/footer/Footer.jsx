import { SiLinkedin, SiGithub, SiGmail   } from "react-icons/si";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <h2 className={styles.h2}>Contacto</h2>
      <ul className={styles.ul}>
        <li className={styles.li}><a className={styles.a} href="https://www.linkedin.com/in/urielsolnik/"><SiLinkedin /> Linkedin</a></li>
        <li className={styles.li}><a className={styles.a} href=""><SiGmail /> Gmail</a></li>
        <li className={styles.li}><a className={styles.a} href=""><SiGithub /> GitHub</a></li>
      </ul>
      <span className={styles.span}>© 2024 Uriel Eduardo Solnik.  All rights reserved.</span>

    </footer>
  )
}
