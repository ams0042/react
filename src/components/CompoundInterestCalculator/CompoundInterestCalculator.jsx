import React, { useState } from 'react';
import styles from './CompoundInterestCalculator.module.css';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    if (principal && rate && years) {
      const P = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseInt(years);
      const A = P * Math.pow(1 + r, t); // Fórmula del interés compuesto
      setResult(A.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className={styles.calculator}>
      <h2>Calculadora de Interés Compuesto</h2>
      <div className={styles.inputGroup}>
        <label>Cantidad Inicial (€)</label>
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </div>
      <div className={styles.inputGroup}>
        <label>Tasa de Interés Anual (%)</label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>
      <div className={styles.inputGroup}>
        <label>Años</label>
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
      </div>
      <button onClick={calculateInterest}>Calcular</button>
      {result !== null && (
        <p className={styles.result}>Monto final: <strong>€{result}</strong></p>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
