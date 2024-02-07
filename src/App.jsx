import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import FooterWithSocialLinks from './components/Footer';
import Hero from './pages/Hero';
import PaginaTours from './pages/PaginaTours';
import Nosotros from './pages/Nosotros';
import Destinos from './pages/Destinos';
import Exp from './pages/PaginaGa';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Ruta por defecto */}
          <Route path="/inicio" element={<Hero />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/destinos" element={<Destinos/>} />
          <Route path="/tours" element={<PaginaTours />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="*" element={<Hero />} /> {/* Ruta para cualquier otra */}
        </Routes>
        <FooterWithSocialLinks />
      </div>
    </Router>
  );
}

export default App;
