import React from 'react';
import CityTours from '../components/CityTours.jsx';
import CartagenaT from '../components/Tours/CartagenaT.jsx';
import MedellinT from '../components/Tours/MedellinT.jsx';
import CaliT from '../components/Tours/CaliT.jsx';

import fotoP from '../../Img/daza/foto-titulo.jpg'
import nosotrosT from '../../Img/daza/nosotrosT.png'


const PaginaCity = () => {
  return (
    <section className='h-100%'>
      <div className='h-100% pb-10' >
        <img src={fotoP} alt="fotoTitulo" className='xl:h-full xl:w-full   max-md:h-[250px] object-cover'/>
      </div>
 
      <div className='xl:p-10 p-0'>
          <CityTours/>
      </div> 

    <img src={nosotrosT} alt="nosotros" />

      <div className=' p-10'>
          <MedellinT/>
      </div>

      <div className='p-10'>
          <CaliT/> 
      </div>

      <div className='p-10'>
          <CartagenaT/>
      </div>



    </section>
  );
}

export default PaginaCity;
