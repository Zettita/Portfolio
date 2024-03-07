import Inicio from '../inicio/Inicio'
import Presentacion from '../presentacion/Presentacion'
import Proyectos from '../proyectos/Proyectos'
import Skills from '../Skills/Skills'
import styles from './main.module.css'


export const Main = () => {
  return (
    <>
    <main className={styles.main}>
        <Inicio/>
        <Presentacion/>
        <Proyectos />
        <Skills/>
        
    </main>
    </>
  )
}
