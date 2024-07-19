import styles from "../Card/Card.module.css";
import { FaGlobe, FaGithub } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url, image_url }) {
  return (
    <section className={styles.card}>
      <img src={image_url} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.card_footer}>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.webLink}
        >
          <FaGlobe /> Link na web
        </a>
        <a
          href={`https://github.com/Hunterland/${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.repoLink}
        >
          <FaGithub /> Repositório
        </a>
      </div>
    </section>
  );
}

export default Card;
