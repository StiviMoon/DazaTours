import React from "react";
import envigado from "../../Img/envigado.jpg";
import { Button } from "@material-tailwind/react";
const Finca = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Me gustaría hacer una reserva para el pasadia en la finca envigado"
    );
    const whatsappURL = `https://wa.me/573045449727?text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <section className="bg-white dark:bg-gray-900 p-10">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
          <img
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
            src={envigado}
            alt="App"
          />
        </div>
        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 className="text-3xl font-semibold tracking-tight text-azul_o xl:text-4xl dark:text-white">
            Disfruta de un Día Inolvidable en la Finca Enbigado, Medellín
          </h2>
          <p className="block max-w-2xl mt-4 text-lg text-azul_o dark:text-gray-300">
            ¡Ven y vive una experiencia única en la Finca Enbigado!{" "}
            <span className=" font-bold ">Por solo $ 100.000 pesos</span>, con
            transporte incluido, te ofrecemos un día lleno de actividades
            emocionantes y diversión para todos.
          </p>

          <Button
            className="mt-10 bg-mostaza text-xl w-auto "
            onClick={openWhatsApp}
          >
            Reservar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Finca;
