import React from 'react';

import sobre from '../../Img/daza/SOBRE.png'
import { Button } from "@material-tailwind/react";


const HeroSection = () => {
  return (
    <section className="text-azul_o body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4  text-scuba_blue font-bold">Somos Familia<br></br>
            <span className="hidden lg:inline-block  text-magenta"> Daza Tours</span>
          </h1>
          <p className="mb-8 leading-relaxed text-xl">Te invitamos a vivir la esencia vibrante de Colombia
a través de nuestros guias turísticos apasionados. Permitete
vivir en la energía única de Cali, explorar la historia de
Cartagena y descubrir los encantos de Medellín. Somos una
agencia que se destaca por ofrecer experiencias llenas
de alegría y conocimiento, guiándote por cada rincón
con entusiasmo contagioso. Con colores vibrantes y un
enfoque amigable,En Daza Tours te brindamos la oportunidad
de descubrir la riqueza cultural de Colombia de una
manera inolvidable.</p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={sobre} />
        </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
