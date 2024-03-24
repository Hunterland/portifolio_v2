// importe components //

// import css//
import styles from "./Sobre.module.css";
// import avatar //
import avatar from "./images/avatar.png";

// icones //
import figma from "./images/icon-figma.svg";
import typescript from "./images/icon-ts.svg";
import js from "./images/icon-js.svg";
import git from "./images/icon-git.svg";
import nodejs from "./images/icon-node.svg";
import angular from "./images/icon-angular.svg";
import react from "./images/icon-react.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Alan Barroncas" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre Mim</h2>
          <p>
            Como entusiasta da tecnologia e artista na cultura hip hop,
            dedico-me a fundir minha paixão pela inovação digital com a rica
            expressão artística do Amazonas.
          </p>
          <br />
          <p>
            Atualmente aprimorando minhas habilidades e graduando em Análise e
            Desenvolvimento de Sistemas, Pai de duas princesas e um príncipe.
            Busco desafios que me permitam crescer profissionalmente e
            pessoalmente.
          </p>
          <br />
          <p>
            Minha abordagem é holística, valorizando a integração entre
            tecnologia, criatividade e impacto social. Vamos conectar-nos e
            explorar como podemos fazer a diferença juntos.
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img className={styles.icon1} src={figma} alt="Figma" />
          <img className={styles.icon2} src={typescript} alt="Ts" />
          <img className={styles.icon3} src={js} alt="Js" />
          <img className={styles.icon4} src={git} alt="Git" />
          <img className={styles.icon5} src={nodejs} alt="NodeJs" />
          <img className={styles.icon6} src={angular} alt="Angular" />
          <img className={styles.icon7} src={react} alt="Reacr" />
          <img className={styles.icon8} src={sql} alt="Sql" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
