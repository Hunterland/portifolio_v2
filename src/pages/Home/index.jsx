import styles from "./Home.module.css";
import resumePDF from "../../assets/Alan_Barroncas_CV5.pdf";

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
        <a
          href={resumePDF}
          className={`${styles.btn} ${styles.btn_charcoal}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV👨‍💻
        </a>
      </div>
      <figure>
        <img
          className={`${styles.img_home} ${styles.floating}`}
          src="/Development-h.png"
          alt="Vetor"
        />
      </figure>
    </section>
  );
}

export default Home;
