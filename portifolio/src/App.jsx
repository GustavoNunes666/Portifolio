// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MiniPortfolio from './MiniPortfolio';
import Contato from './Contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniPortfolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
