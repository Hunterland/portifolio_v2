// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Sobre.module.css";
import avatar from "./images/avatar_2.png";

// Icons
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
      <div className={styles.profileSection}>
        <img src={avatar} alt="Alan Barroncas" className={styles.avatar} />
        <div className={styles.textSection}>
          <h2>Sobre Mim</h2>
          <p>
            Com 2 anos de experiência prática como Desenvolvedor Frontend /
            Fullstack, possuo competências tanto em desenvolvimento web quanto
            em software.
          </p>
          <br />
          <p>
            Minha jornada profissional também inclui uma experiência breve, mas
            extremamente valiosa, na área de Suporte Técnico. Essa vivência me
            ajudou a desenvolver uma capacidade de resolução de problemas e me
            proporcionou uma compreensão mais profunda dos desafios cotidianos
            enfrentados pelos usuários. Sou uma pessoal altamente adaptável, que
            se comunica e trabalha muito bem em equipe.
          </p>
          <br />
          <p>
            Estou sempre buscando oportunidades que me permitam crescer tanto
            profissional quanto pessoalmente. Adoto uma abordagem holística que
            valoriza a integração entre tecnologia, criatividade e impacto
            social. Estou aberto a conexões e oportunidades para colaborar em
            projetos que podem fazer a diferença.
          </p>
        </div>
      </div>

      {/* Área de Hardskills */}
      <div className={styles.skillsSection}>
        <div className={styles.hardskills}>
          <h3>Hardskills</h3>
          <div className={styles.icones}>
            <img className={styles.icon1} src={figma} alt="Figma" />
            <img className={styles.icon2} src={typescript} alt="Ts" />
            <img className={styles.icon3} src={js} alt="Js" />
            <img className={styles.icon4} src={git} alt="Git" />
            <img className={styles.icon5} src={nodejs} alt="NodeJs" />
            <img className={styles.icon6} src={angular} alt="Angular" />
            <img className={styles.icon7} src={react} alt="React" />
            <img className={styles.icon8} src={sql} alt="Sql" />
          </div>
        </div>
        <div className={styles.softskills}>
          <h3>Softskills</h3>
          <ul>
            <li>Adaptabilidade</li>
            <li>Comunicação</li>
            <li>Trabalho em equipe</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
