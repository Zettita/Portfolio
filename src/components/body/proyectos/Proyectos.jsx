import styles from "./proyectos.module.css";
import foto from "../../../assets/series.png";
import foto2 from "../../../assets/cotizador.png";
import { SiGithub, SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Proyectos() {
  const [positionX, setPositionX] = useState(0)
  const goRight = () => {
    const div = document.getElementById("div");
    const card = div.querySelector(`.${styles.card}`);
    const cardWidth = card.clientWidth;
    console.log(cardWidth);
    if(positionX > -cardWidth) {
      setPositionX(positionX - card.clientWidth)
    } else {
      console.log("no puede moverse mas");
    }
    
  };

  const goLeft = () => {
    const div = document.getElementById("div");
    // div.style.transition = `translateX(0px)`
    const card = div.querySelector(`.${styles.card}`);
    const cardWidth = card.clientWidth;
    if(positionX < 0) {
    setPositionX(positionX + cardWidth)
    
    } else {
      console.log("no puede moverse mas");
    }
  };

  useEffect(() => {
    const div = document.getElementById("div");
    div.style.transform = `translateX(${positionX}px)`;
    
  }, [positionX])
  

  return (
    <>
      <section className={styles.section} id="proyectos">
        <h3 className={styles.h3}>Proyectos</h3>
        <div className={styles.container}>
          <div className={styles.divFlechas}>
            <span className={styles.flechaIzquierda} onClick={goLeft}>
              {"<"}
            </span>
            <span className={styles.flechaDerecha} onClick={goRight}>
              {">"}
            </span>
          </div>

          <div className={styles.div} id="div">
            <div className={styles.card} id="1">
              <div className={styles.divImagen}>
                <img className={styles.img} src={foto} id="primera" alt="" />
              </div>
              <div className={styles.divCard}>
                <h3 className={styles.h3}>Z Show </h3>
                <p className={styles.p}>Sitio de TV Shows</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <SiJavascript className={styles.js} />
                  </li>
                  <li className={`${styles.li} ${styles.html}`}>
                    <SiHtml5 className={styles.html} />
                  </li>
                  <li className={styles.li}>
                    <SiCss3 className={styles.css} />
                  </li>
                </ul>
                <div className={styles.divIconos}>
                  <a
                    className={styles.a}
                    href="https://github.com/Zettita/PROYECTO2-URIELEDUARDO-SOLNIK"
                  >
                    <SiGithub className={styles.icon} />
                  </a>

                  <a
                    className={styles.a}
                    href="https://zettita.github.io/PROYECTO2-URIELEDUARDO-SOLNIK/index.html"
                  >
                    <FaLink className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card} id="2">
              <div className={styles.divImagen}>
                <img className={styles.img} src={foto2} id="segunda" alt="" />
              </div>
              <div className={styles.divCard}>
                <h3 className={styles.h3}>Cotizador</h3>
                <p className={styles.p}>Hecho con React</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <SiJavascript className={styles.js} />
                  </li>
                  <li className={`${styles.li} ${styles.html}`}>
                    <SiHtml5 className={styles.html} />
                  </li>
                  <li className={styles.li}>
                    <SiCss3 className={styles.css} />
                  </li>
                  <li className={styles.li}>
                    <SiReact className={styles.react} />
                  </li>
                </ul>
                <div className={styles.divIconos}>
                  <a
                    className={styles.a}
                    href="https://github.com/Zettita/PROYECTO3-URIEL-SOLNIK"
                  >
                    <SiGithub className={styles.icon} />
                  </a>

                  <a
                    className={styles.a}
                    href="https://cotizador-solnik.netlify.app/"
                  >
                    <FaLink className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divCardsContainer}>
        <div className={styles.card} id="1">
              <div className={styles.divImagen}>
                <img className={styles.img} src={foto} id="primera" alt="" />
              </div>
              <div className={styles.divCard}>
                <h3 className={styles.h3}>Z Show </h3>
                <p className={styles.p}>Sitio de TV Shows</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <SiJavascript className={styles.js} />
                  </li>
                  <li className={`${styles.li} ${styles.html}`}>
                    <SiHtml5 className={styles.html} />
                  </li>
                  <li className={styles.li}>
                    <SiCss3 className={styles.css} />
                  </li>
                </ul>
                <div className={styles.divIconos}>
                  <a
                    className={styles.a}
                    href="https://github.com/Zettita/PROYECTO2-URIELEDUARDO-SOLNIK"
                  >
                    <SiGithub className={styles.icon}/>
                  </a>

                  <a
                    className={styles.a}
                    href="https://zettita.github.io/PROYECTO2-URIELEDUARDO-SOLNIK/index.html"
                  >
                    <FaLink className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card} id="2">
              <div className={styles.divImagen}>
                <img className={styles.img} src={foto2} id="segunda" alt="" />
              </div>
              <div className={styles.divCard}>
                <h3 className={styles.h3}>Cotizador</h3>
                <p className={styles.p}>Hecho con React</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <SiJavascript className={styles.js} />
                  </li>
                  <li className={`${styles.li} ${styles.html}`}>
                    <SiHtml5 className={styles.html} />
                  </li>
                  <li className={styles.li}>
                    <SiCss3 className={styles.css} />
                  </li>
                  <li className={styles.li}>
                    <SiReact className={styles.react} />
                  </li>
                </ul>
                <div className={styles.divIconos}>
                  <a
                    className={styles.a}
                    href="https://github.com/Zettita/PROYECTO3-URIEL-SOLNIK"
                  >
                    <SiGithub className={styles.icon} />
                  </a>

                  <a
                    className={styles.a}
                    href="https://cotizador-solnik.netlify.app/"
                  >
                    <FaLink className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </section>
      
    </>
  );
}
