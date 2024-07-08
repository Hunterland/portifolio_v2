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
import docker from "./images/icon-dk.svg";
import bootstrap from "./images/icon-bs.svg";
import angular from "./images/icon-angular.svg";
import reactIcon from "./images/icon-react.svg";
import tailwind from "./images/icon-tw.svg";
import php from "./images/icon-php.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.profileSection}>
        <img src={avatar} alt="Alan Barroncas" className={styles.avatar} />
        <div className={styles.textSection}>
          <h2>Sobre Mim</h2>
          <div className={styles.dottedLine}></div>
          <p>
            Com 2 anos de experiência prática como Desenvolvedor Frontend /
            Fullstack, possuo competências tanto em desenvolvimento web quanto
            em software.
          </p>
          <p>
            Minha jornada profissional também inclui uma experiência breve, mas
            extremamente valiosa, na Área de Suporte Técnico. Essa vivência me
            ajudou a desenvolver uma capacidade de resolução de problemas e me
            proporcionou uma compreensão mais profunda dos desafios cotidianos
            enfrentados pelos usuários. Sou uma pessoal altamente adaptável, que
            se comunica e trabalha muito bem em equipe.
          </p>
          <p>
            Estou sempre buscando oportunidades que me permitam crescer tanto
            profissional quanto pessoalmente. Adoto uma abordagem holística que
            valoriza a integração entre tecnologia, criatividade e impacto
            social. Estou aberto a conexões e oportunidades para colaborar em
            projetos que podem fazer a diferença.
          </p>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <div className={styles.hardskills}>
          <h3>Hardskills</h3>
          <div className={styles.icones}>
            <div className={styles.row}>
              <img className={styles.icon} src={figma} alt="Figma" />
              <img className={styles.icon} src={typescript} alt="Typescript" />
              <img className={styles.icon} src={js} alt="Javascript" />
              <img className={styles.icon} src={git} alt="Git" />
              <img className={styles.icon} src={nodejs} alt="Node.js" />
              <img className={styles.icon} src={docker} alt="Docker" />
            </div>
            <div className={styles.row}>
              <img className={styles.icon} src={bootstrap} alt="Bootstrap" />
              <img className={styles.icon} src={angular} alt="Angular" />
              <img className={styles.icon} src={reactIcon} alt="React" />
              <img className={styles.icon} src={tailwind} alt="Tailwind" />
              <img className={styles.icon} src={php} alt="PHP" />
              <img className={styles.icon} src={sql} alt="SQL" />
            </div>
          </div>
        </div>
        <div className={styles.softskills}>
          <h3>Softskills</h3>
          <ul>
            <li>Adaptável</li>
            <li>Flexível</li>
            <li>Comunicativo</li>
            <li>Trabalho em Equipe</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
