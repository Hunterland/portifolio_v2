// importando componentes
import styles from "./Home.module.css";

// arquivos para download //
import resumePDF from "../../assets/Alan_Barroncas_CV5.pdf";
// Substitua pelo caminho correto do seu currÃ­culo em PDF

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, sou <br />
          <span>Alan Barroncas</span>
          <br />
          Fullstack Developer
        </p>
        <button className={`${styles.btn} ${styles.btn_charcoal}`}>
          <a href={resumePDF} download="Alan_Barroncas_CV5.pdf">
            Download CV
          </a>
        </button>
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
