// src/pages/BeerDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeerDetails.css';

function BeerDetails() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch('./beers.json')
  .then(response => response.json())
  .then(data => {
    setBeer(data[id]);
  })
  .catch(error => console.error('Erro ao carregar detalhes:', error));
  }, [id]);

  if (!beer) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Carregando...</p>;
  }

  return (
    <div className="beer-details-container">
      <img src={beer.imagem} alt={beer.nome} className="beer-details-image" />
      <h2 className="beer-details-title">{beer.nome}</h2>
      <p className="beer-details-description">{beer.descricao}</p>
      {/* Adicione mais informações, se quiser */}
    </div>
  );
}

export default BeerDetails;
