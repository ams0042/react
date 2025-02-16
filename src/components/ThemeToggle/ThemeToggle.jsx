import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className={styles.toggle}
      data-theme={theme}
      aria-label="Toggle theme"
    >
      <span className={`${styles.icon} ${styles.sun}`}>🌞</span>
      <span className={`${styles.icon} ${styles.moon}`}>🌙</span>
    </button>
  );
};

export default ThemeToggle;