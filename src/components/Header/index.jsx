// importando estilos //
// estrutura HTML e CSS //
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo_AB.svg";
import { Link } from "react-router-dom";
import { useState } from 'react'

function Header() {

  const [ showMenu, setShowMenu ] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      {/* logo Hunter */}
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      <nav className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`} onClick={toggleMenu}>
        <Link to="/" className="active" href="">Home</Link>
        <Link to="/sobre" href="">Sobre</Link>
        <Link to="/projetos" href="">Projetos</Link>
        <Link to="/contatos" href="">Contatos</Link>
      </nav>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
    </header>
  );
}

export default Header;
