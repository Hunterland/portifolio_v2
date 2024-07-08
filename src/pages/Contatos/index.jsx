import styles from "./Contatos.module.css";
import { BsEnvelope , BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Contatos() {
return (
  <>
    
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        <div className={styles.icones}>
      
          <a
            href="https://wa.me/5592993818973"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className={styles.icone} />
          </a>
          

          <a
            href="mailto:alanbarroncas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsEnvelope  className={styles.icone} />
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
