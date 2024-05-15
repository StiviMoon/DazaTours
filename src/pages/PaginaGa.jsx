import React from "react";
import d1 from "../../Img/daza/disparos1.jpeg";
import d2 from "../../Img/daza/disparos2.jpeg";
import d3 from "../../Img/daza/disparos3.jpeg";
import d4 from "../../Img/daza/disparos4.jpeg";

import d5 from "../../Img/daza/disparos5.jpeg";
import d6 from "../../Img/daza/disparos6.jpeg";
import d7 from "../../Img/daza/disparos7.jpeg";
import d8 from "../../Img/daza/disparos8.jpeg";

import nosotros7 from "../../Img/daza/7.jpeg";
import nosotros8 from "../../Img/daza/8.jpeg";
import nosotros9 from "../../Img/daza/9.jpeg";
import nosotros0 from "../../Img/daza/0.jpeg";

import nosotrosTours from "../../Img/daza/nosotrosTours.png";

import { Button } from "@material-tailwind/react";

const PaginaGa = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Me gustaría hacer una reserva para poligono."
    );
    const whatsappURL = `https://wa.me/573045449727?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="text-azul_o body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-scuba_blue lg:w-1/3 lg:mb-0 mb-4">
            Vive una experiencia unica en el Poligono
          </h1>
          <p className="lg:pl-16 lg:w-2/3 mx-auto leading-relaxed text-lg ">
            ¡Experimenta la emoción del tiro al blanco en nuestro tour
            supervisado en un polígono profesional, con todos los permisos
            necesarios! Mejora tus habilidades con la guía de instructores
            expertos y disfruta de una experiencia segura y emocionante.
            ¡Reserva ahora y vive la aventura!{" "}
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl "
                src={d6}
              />
            </div>
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d2}
              />
            </div>
            <div className="md:p-4 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-4 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d7}
              />
            </div>
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d4}
              />
            </div>
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d5}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <a href="/tours">
          <Button
            onClick={openWhatsApp}
            className="xl:w-auto w-[100%] bg-scuba_blue text-white p-4 rounded-xl text-[15px] xl:text-xl"
          >
            Reserve
          </Button>
        </a>
      </div>

      <img src={nosotrosTours} alt="nosotros" />

      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-azul_o lg:w-1/3 lg:mb-0 mb-4">
            Experiencias unicas con Nosotros
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            ¡Embárcate en una aventura inolvidable de la mano de nuestros
            apasionados guías turísticos! Descubre la belleza de Colombia
            mientras conoces personas fascinantes y te sumerges en la alegría
            contagiosa de su gente. Déjanos llevarte en un viaje donde cada
            momento te dejará maravillado y ansioso por descubrir más de este
            increíble país. ¡Únete a nosotros y vive una experiencia que
            recordarás para siempre!
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={nosotros0}
              />
            </div>
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={nosotros7}
              />
            </div>
            <div className="md:p-4 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={nosotros9}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-4 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={nosotros8}
              />
            </div>
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d1}
              />
            </div>
            <div className="md:p-4 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl"
                src={d8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaginaGa;
