import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isActive, setisActive] = useState(false)


  function toggle() {
    const nav = document.getElementById("nav");
    nav.classList.toggle(`${styles.nav}`);
    nav.classList.toggle(`${styles.activo}`);
    if (!isActive) {
     setisActive(true);
  } else {
    setisActive(false);
  }
}
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Mi portfolio</h1>
      <button id="button" className={styles.button} onClick={toggle}>
        {!isActive ? (
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={styles.svg}
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        )}
      </button>
      <nav id="nav" className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#acercaDeMi" className={styles.a} onClick={toggle}>
              Acerca de mÍ
            </a>
          </li>
          <li className={styles.li}>
            <a href="#skills" className={styles.a} onClick={toggle}>
              Skills
            </a>
          </li>
          <li className={styles.li}>
            <a href="" className={styles.a} onClick={toggle}>
              Proyectos
            </a>
          </li>
          <li className={styles.li}>
            <a href="#a" className={styles.a} onClick={toggle}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
