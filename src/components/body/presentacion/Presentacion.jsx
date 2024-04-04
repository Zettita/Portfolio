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
          ¡Hola! Soy Uriel Solnik, tengo 25 años y soy argentino. Me considero un apasionado Front End Developer en constante evolución, también soy estudiante de Ingeniería en Informática. Mi viaje en el desarrollo web comenzó hace unos años, y desde entonces, mi objetivo es convertirme en un Full Stack Developer, fusionando mi experiencia en Front End con habilidades en Back End. Mi fascinación por la tecnología me acompaña desde mi infancia, donde desarmar y armar mis propias computadoras despertó mi interés por la misma y por la programación. Estoy en formación constante, siempre buscando aprender y mejorar en este emocionante campo.
          </p>
        </div>
      </section>
    </>
  );
}
