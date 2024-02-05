

import cv from './CV-Uriel-Solnik.pdf'
import { FaSheetPlastic, FaWhatsapp  } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import styles from './inicio.module.css'
import imagen from '../../../assets/icons8-abajo-90.png'
import fondo from '../../../assets/papers.co-ax42-coding-dark-computer-bokeh-illustration-art-black-34-iphone6-plus-wallpaper.jpg'
export default function Inicio
() {

  setInterval(() => {
    
    const guion = document.getElementById('guion')
    const flecha = document.getElementById('flecha')
    flecha.classList.toggle(`${styles.down}`)
    guion.classList.toggle(`${styles.guion}`)

  }, 700);

  return (
    <>
    <section className={styles.section}>
      <img className={styles.fondo} src={fondo} alt="" />
    <h3 className={styles.h3}>¡Hola! soy</h3>
    <h2 className={styles.h2}>Uriel Solnik</h2>
    <h3 className={styles.h3FED}>Front-End Developer<span className={styles.guion} id="guion">_</span></h3>
    <div className={styles.div}>  
        <button className={styles.button}><a  href={cv} download className={styles.a}><SiGmail className={styles.svg} /></a></button>
        <button className={styles.button}><a  href={cv} download className={styles.a}><FaWhatsapp className={styles.svg} /></a></button>
        <button className={styles.button}><a  href={cv} download className={styles.a}><FaSheetPlastic className={styles.svg} /></a></button>
    </div>
    <img className={styles.flecha} id='flecha' src={imagen} alt="lalalala" />
    </section>
    </>
  )
}
