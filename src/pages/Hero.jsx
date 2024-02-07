
import React, { useState } from 'react';



import HorizontalCard from '../components/Destinos.jsx'
import RatingWithText from '../components/Review.jsx'

import TestimonialCard from '../components/Clientes.jsx'
import VideoModal from '../components/Modal.jsx'


import { Button } from "@material-tailwind/react";
import { RiPlayFill } from "react-icons/ri";
import Carrusel from "../components/Carrusel";
import Caras from "../components/Caras.jsx"

//Img
import medellin from "../../Img/medellin.jpg"
import casasC from "../../Img/casasC.jpg"
import cartagena from "../../Img/cartagena.jpg"

import slogan from "../../Img/slogan.png";
import nosotros from "../../Img/nosotros.jpeg";

import nosotrosTour from '../../Img/daza/nosotrosTours.png'


const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <section className="h-[100%] grid grid-cols-1 md:grid-cols-10 ">
      <div className="md:col-span-5 flex items-center justify-center ">
        <img
          className="xl:w-[650px] w-[400px] absolute xl:top-[135px] top-[125px] -left-[15px] -z-10"
          src={slogan}
          alt="Slogan_Daza"
        />
        <div className="flex flex-col gap-4 p-5 xl:p-10 ">
          <p className="text-azul_o text-lg xl:text-xl m-2 xl:m-5 xl:pt-[355px] pt-[250px] ">
            Descubre la maravilla de Colombia: paisajes impresionantes, cultura vibrante y experiencias únicas te esperan. Desde las cumbres
            de los Andes hasta las playas del Caribe,
            cada rincón es una invitación a la aventura.<br/>
            ¡Haz de Colombia tu próximo destino inolvidable!
          </p>
          <div className="flex items-center xl:gap-8 xl:px-5 px-3">
          <a href="/tours">
          <Button className="xl:w-auto w-[100%] bg-mostaza text-white p-4 rounded-xl text-[15px] xl:text-xl" >
            Tours Packs
          </Button>
          </a>
          <button
              onClick={openModal}
              className="text-azul_o flex items-center gap-3 px-5 py-5 rounded-xl text-[15px] xl:text-xl text-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <RiPlayFill className="bg-scuba_blue text-white p-5 rounded-full box-content" />
              Watch our <br />
              Introduction video
            </button>

            {isModalOpen && <VideoModal onClose={closeModal} />}
          </div>
        </div>
      </div>
      <div className="col-span-5 flex flex-col h-[100%] ">
        <Carrusel />
        
      </div>

      <div className="h-[100%] p-10 m-10 pb-[150px] md:col-span-5 flex items-center justify-center ">
        
        <div className="m-4">
          <img src={nosotros} alt="nosotros" className="w-[550px] rounded-full" />
        </div>
      </div>
        <div className="col-span-5 flex flex-col items-center justify-center xl:m-10">
            <h2 className="xl:text-5xl text-4xl font-bold text-scuba_blue mb-3 justify-center">Sobre Nosotros</h2>
            <p className="text-azul_o text-lg m-12 text-center">
              En <span className="text-[20px] text-mostaza font-bold text-center">
                DAZA TOURS
                </span>,
                nuestra misión es hacer que cada viaje sea una experiencia inolvidable.
                Nos dedicamos a brindar momentos únicos y auténticos en los destinos más hermosos de Colombia.
                Nuestro equipo está comprometido a ofrecer un servicio excepcional, basado en nuestros valores de pasión, 
                profesionalismo y dedicación.
            </p>
            <Caras/>
        </div>
    </section>

    <section className="h-[100%] p-10 flex xl:flex-row gap-10 flex-col justify-center ">  
      <HorizontalCard
        imageUrl={casasC}
        
        description='Siente el ritmo de la salsa en Cali, una ciudad vibrante llena de energía y pasión por la música y el baile'
        buttonText="Ir Cali"
        buttonUrl="/destinos"
      />
      <HorizontalCard
        imageUrl={medellin}
        
        description="Descubre la belleza y la innovación en Medellín, una ciudad que combina su exuberante entorno natural con una escena urbana vibrante y dinámica"
        buttonText="Ir Medellin"
        buttonUrl="/destinos"
      />
      <HorizontalCard
        imageUrl={cartagena}
        
        description="Sumérgete en la magia colonial de Cartagena, donde las calles empedradas, las coloridas fachadas y el encanto del Caribe te transportan a otra época"
        buttonText="Ir Cartagena"
        buttonUrl="/destinos"
      />
    </section>
    <img src={nosotrosTour} alt="nosotros" className='pt-10 pb-10'/>

      <RatingWithText/>

      <section className="h-[100%] p-10 pt-[60px] flex xl:flex-row gap-10 flex-col justify-center mt-[30px] mb-[50px] ">

      <TestimonialCard
        name="James"
        position="USA"
        stars={5}
        testimonial="My trip with Daza Tours through Colombia was truly unforgettable. From the mountains of Medellin to the colonial beauty of Cartagena, every destination exceeded my expectations. The services were impeccable, and the itineraries were perfectly organized. I highly recommend Daza Tours for those seeking an authentic experience in Colombia."
        avatarSrc="https://img.freepik.com/foto-gratis/vista-frontal-joven-camisa-negra-posando_140725-19510.jpg?w=826&t=st=1706408122~exp=1706408722~hmac=76431c86cd710f783531810668c01ac71efe1ec39131ef07e0fc26b24778a75a"
      />

      <TestimonialCard
        name="Yui"
        position="Japon"
        stars={5}
        testimonial="An incredible experience with Daza Tours in Colombia! From the Amazon jungle to the beaches of Cartagena, every moment was magical. The customer service was exceptional, and the guides knew every corner of the country. I would definitely recommend Daza Tours to anyone looking to explore the beauty of Colombia"
        avatarSrc="https://img.freepik.com/foto-gratis/belleza-emociones-gente-concepto-ocio-verano-alegre-despreocupada-mujer-asiatica-riendo-disfrutando-verano-pie-fondo-rosa-sonriendo-alegremente-estado-animo-positivo_1258-59418.jpg?w=826&t=st=1706407993~exp=1706408593~hmac=a18650408aad5947230ba456ca1621a0250198de7c7ec1a69d8ee7fcf7a3c1d5"
      />

      <TestimonialCard
        name="Lukas"
        position="Alemania"
        stars={5}
        testimonial="Daza Tours provided me with a unique travel experience in Colombia. From the vibrant culture of Bogotá to the lush nature of the coffee region, every moment was an exciting adventure. The guides were friendly and knowledgeable, and always willing to accommodate our needs. I recommend Daza Tours to anyone looking to explore Colombia's diversity with a reliable and professional company."
        avatarSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
     

      </section>
 
    </>
  );
};

export default Hero;
