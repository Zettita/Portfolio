import styles from "./presentacion.module.css";
export default function Presentacion() {
  return (
    <>
      <section className={styles.section} id="acercaDeMi">
        <div className={styles.divTittle}>
          <span className={styles.span}></span>
          <h3 className={styles.h3}>
            Acerca de mÍ
          </h3>
          <span className={styles.span}></span>
        </div>
        <div className={styles.div}>
          <div className={styles.fotoDiv}></div>
          <p className={styles.p}>
            Mi perfil laboral está centrado en el ámbito administrativo y
            tecnológico, dos áreas que considero fundamentales en el mundo
            actual. Sin embargo, mi pasión por la tecnología va más allá de la
            gestión, ya que aspiro a convertirme en un desarrollador Full Stack.
            Mi objetivo es combinar mis habilidades administrativas con un
            conocimiento técnico profundo para crear soluciones innovadoras y
            eficientes.
          </p>
        </div>
      </section>
    </>
  );
}
