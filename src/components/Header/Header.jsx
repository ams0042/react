import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/news">Noticias</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;