// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header';
import BeerDetails from './pages/BeerDetails';
import Home from './pages/Home';

function App() {
  return (
    <Router basename='/maltvs-menu'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
