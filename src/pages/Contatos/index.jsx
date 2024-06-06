import styles from "./Contatos.module.css";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

function Contatos() {
return (
  <>
    
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        <div className={styles.icones}>
      
          <a
            href="https://tttttt.me/hunterland95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram className={styles.icone} />
          </a>
          

          <a
            href="https://github.com/Hunterland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />
          </a>

          <a
            href="https://www.linkedin.com/in/alan-barroncas95/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icone} />
          </a>

        </div>
      </section>
  </>
);
}

export default Contatos;
