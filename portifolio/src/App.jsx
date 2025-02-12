// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MiniPortfolio from './MiniPortfolio';
import Contato from './Contato';
import Design from './Design';
import Edicao from './Edicao';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniPortfolio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Edicao" element={<Edicao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
