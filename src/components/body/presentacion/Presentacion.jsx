import fotoPerfil from '../../../assets/fotoPerfil.jpg'
import styles from './presentacion.module.css'
export default function Presentacion() {
  return (
    <>
    <section className={styles.section} id='acercaDeMi'>
        <h3 className={styles.h3}>Acerca de mi</h3>
        <img src={fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil} />
        <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni accusantium, cum dolor corrupti beatae praesentium doloribus excepturi animi iste distinctio ipsam fuga placeat eveniet ut harum ipsa culpa rem iure?
        Placeat expedita, dolores quidem suscipit libero porro dolorum magni voluptate magnam sapiente illum, repellat esse eius minima impedit vitae laboriosam nam a eveniet fugiat provident doloribus. Voluptatem cum distinctio voluptatibus.
        Facere, numquam porro. Odio repudiandae quidem dolor deleniti repellat asperiores ut suscipit cum illo optio, architecto quisquam fuga culpa aut dolores dolorem eveniet, quos in. Magni excepturi nam quibusdam quo.</p> 
    </section>
    </>
  )
}
