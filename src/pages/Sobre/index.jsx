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
              Apaixonado por inovação digital e sempre em busca de novos desafios,
              atualmente estou aprimorando minhas habilidades no curso de Análise e Desenvolvimento de Sistemas.
              Com 2 anos de experiência prática como Desenvolvedor Frontend | Fullstack,
              possuo competências tanto em desenvolvimento web quanto em software.
            </p>
            <br />
            <p>
              Além disso, tive uma breve incursão na área de Suporte,
              o que contribuiu para o desenvolvimento da minha capacidade de compreensão
              e resolução de problemas cotidianos. Tenho habilidades de adaptação,
              comunicação eficaz e trabalho em equipe.
            </p>
            <br />
            <p>
              Estou sempre buscando oportunidades que me permitam crescer tanto profissional quanto pessoalmente.
              Adoto uma abordagem holística que valoriza a integração entre tecnologia, criatividade e impacto social.
              Estou aberto a conexões e oportunidades para colaborar em projetos que fazem a diferença.
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
