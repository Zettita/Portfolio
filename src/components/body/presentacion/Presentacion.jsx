
// import fotoPerfil from '../../../assets/fotoPerfil.jpg'
import cv from './CV-Uriel-Solnik.pdf'
import { FaSheetPlastic, FaWhatsapp  } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import styles from './presentacion.module.css'
export default function Presentacion() {

  setInterval(() => {
    
    const guion = document.getElementById('guion')
    guion.classList.toggle(`${styles.guion}`)

  }, 700);

  return (
    <>
    <section className={styles.section} id="acercaDeMi">
    {/* <img src={fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil} /> */}
    <h3 className={styles.h3}>¡Hola! soy</h3>
    <h2 className={styles.h2}>Uriel Solnik</h2>
    <h3 className={styles.h3}>Front-End Developer<span className={styles.guion} id="guion">_</span></h3>
    <div className={styles.div}>
        {/* <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni accusantium, cum dolor corrupti beatae praesentium doloribus excepturi animi iste distinctio ipsam fuga placeat eveniet ut harum ipsa culpa rem iure?
        Placeat expedita, dolores quidem suscipit libero porro dolorum magni voluptate magnam sapiente illum, repellat esse eius minima impedit vitae laboriosam nam a eveniet fugiat provident doloribus. Voluptatem cum distinctio voluptatibus.
        Facere, numquam porro. Odio repudiandae quidem dolor deleniti repellat asperiores ut suscipit cum illo optio, architecto quisquam fuga culpa aut dolores dolorem eveniet, quos in. Magni excepturi nam quibusdam quo.</p> */}
        <div>
        <button className={styles.button}><a  href={cv} download className={styles.a}></a><SiGmail /></button>
        <button className={styles.button}><a  href={cv} download className={styles.a}></a><FaWhatsapp/></button>
        <button className={styles.button}><a  href={cv} download className={styles.a}></a><FaSheetPlastic /></button>
        
        </div>
    </div>
    </section>
    </>
  )
}
