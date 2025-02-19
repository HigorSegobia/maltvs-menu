// src/components/BeerCard.js
import React from 'react';
import './BeerCard.css';

function BeerCard({ nome, imagem }) {
  return (
    <div className="beer-card">
      {imagem && <img src={imagem} alt={nome} className="beer-card-image" />}
      <h3 className="beer-card-title">{nome}</h3>
    </div>
  );
}

export default BeerCard;
