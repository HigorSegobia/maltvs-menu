// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../components/BeerCard';
import './Home.css';

function Home() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('/beers.json')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Erro ao carregar as cervejas:', error));
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Cardápio de Cervejas</h2>
      <div className="home-beer-grid">
        {beers.map((beer, index) => (
          <Link to={`/beer/${index}`} key={index} className="beer-link">
            <BeerCard nome={beer.nome} imagem={beer.imagem} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
