import React, { useEffect, useState } from 'react';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const API_KEY = 'a71dd956c2fa4383b84e3a61da4b17f2';
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setNewsArticles(data.articles))
      .catch(error => console.error('Error al cargar noticias:', error));
  }, []);

  return (
    <div className="container">
      <h1>Últimas Noticias</h1>
      {newsArticles.length === 0 ? (
        <p>Cargando noticias...</p>
      ) : (
        newsArticles.map((news, index) => (
          <div key={index} className="section">
            <h2>{news.title}</h2>
            {news.urlToImage && <img src={news.urlToImage} alt={news.title} width="100%" />}
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">Leer más</a>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
