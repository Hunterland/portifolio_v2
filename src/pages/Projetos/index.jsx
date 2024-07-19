import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchImage = async (repoName) => {
      const response = await fetch(
        `https://raw.githubusercontent.com/Hunterland/${repoName}/main/screenshot.png`
      );
      return response.ok
        ? `https://raw.githubusercontent.com/Hunterland/${repoName}/main/screenshot.png`
        : "https://via.placeholder.com/300"; // Link para uma imagem padrão
    };

    const fetchRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/Hunterland/repos"
      );
      const data = await response.json();
      const reposWithImages = await Promise.all(
        data.map(async (repo) => ({
          ...repo,
          image_url: await fetchImage(repo.name),
        }))
      );
      setRepositories(reposWithImages);
    };

    fetchRepositories();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.lista}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              image_url={repo.image_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projetos;
