import fotoPerfil from '../../../assets/fotoPerfil.png'
import styles from './presentacion.module.css'
export default function Presentacion() {
  return (
    <>
    <section className={styles.section} id='acercaDeMi'>
        <h3 className={styles.h3}>Acerca de mi</h3>
        <img src={fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil} />
        <p className={styles.p}>Mi perfil laboral está centrado en el ámbito administrativo y tecnológico, dos áreas que 
considero fundamentales en el mundo actual. Sin embargo, mi pasión por la tecnología 
va más allá de la gestión, ya que aspiro a convertirme en un desarrollador Full Stack. Mi 
objetivo es combinar mis habilidades administrativas con un conocimiento técnico 
profundo para crear soluciones innovadoras y eficientes.</p> 
    </section>
    </>
  )
}
