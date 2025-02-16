import React, { useEffect, useState } from 'react';

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setCryptos(data))
      .catch(error => console.error('Error al cargar criptomonedas:', error));
  }, []);

  return (
    <div className="container">
      <h1>Mercado de Criptomonedas</h1>
      {cryptos.length === 0 ? (
        <p>Cargando datos...</p>
      ) : (
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Capitalización</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td><img src={crypto.image} alt={crypto.name} width="40" /></td>
                <td>{crypto.name}</td>
                <td>${crypto.current_price.toLocaleString()}</td>
                <td>${crypto.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
