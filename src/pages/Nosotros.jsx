import React from 'react';
import FeatureSection from '../components/Blog.jsx'
import GaleriaNosotros from '../components/GaleriaNosotros.jsx'
import HeroSection from '../components/Informacion.jsx'

import nosotrosTour from '../../Img/daza/nosotrosTours.png'


 // Asegúrate de cambiar la ruta de la imagen a tu logo de Daza Tours

const Nosotros = () => {
  return (
    <div className='h-100%' >

    <HeroSection/>
    <FeatureSection/>
    <img src={nosotrosTour} alt="nosotros" className='pt-10 pb-10'/>
    <GaleriaNosotros/>
        

 
      
    </div>
  );
}

export default Nosotros;
