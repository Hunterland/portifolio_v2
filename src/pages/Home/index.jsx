import styles from "./Home.module.css";
import resumePDF from "../../assets/Alan_Barroncas_CV5.pdf";
import developerImage from "../../../public/Development-h.png"; // Certifique-se de que o caminho está correto

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, sou <br />
          <span>Alan Barroncas</span>
          <br />
          Frontend Developer
        </p>
        <div className={styles.divBottom}>
          <a
            href={resumePDF}
            className={`${styles.btn} ${styles.btn_charcoal}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV🧑‍💻
          </a>
        </div>
      </div>
      <figure className={styles.figure}>
        <img
          className={styles.img_home}
          src={developerImage}
          alt="Vetor"
        />
      </figure>
    </section>
  );
}

export default Home;
