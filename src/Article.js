// Articles.js
import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Effectuez une requête GET à votre serveur pour récupérer les articles depuis la base de données
    fetch('http://localhost:5000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Erreur lors de la récupération des articles:', error));
  }, []);

  return (
    <div>
      <h1>Liste des articles :</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h3>{article.productName}</h3>
            <p>{article.productQuantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
