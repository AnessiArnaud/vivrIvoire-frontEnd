import React, { useState, useEffect } from 'react';

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effectuez une requête au serveur pour récupérer les données
    fetch('https://vivrivoire-api.onrender.com/get-cultures')  // Endpoint à créer sur le serveur pour récupérer les données
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <div>
            <span>{item.type}</span>
            <img src={`data:${item.contentType};base64,${item.image.toString('base64')}`} alt="" />
          </div>
          <div>
            <p>{item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
