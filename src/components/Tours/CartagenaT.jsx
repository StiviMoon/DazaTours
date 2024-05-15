import BookingCard from "../Card.jsx";
import f1 from "../../../Img/sitios/f1.jpg";

import cartagenaP from "../../../Img/sitios/cartagenaPersonas.jpg";
import islas from "../../../Img/sitios/islas-rosario.jpg";

const CartagenaT = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <BookingCard
          imageSrc={f1}
          title="Tour Histórico Cartagena"
          rating="5.0"
          description=" Este tour te llevará a través de siglos de historia colonial mientras te maravillas con la arquitectura colonial y las fascinantes historias que conforman el pasado de Cartagena. Castillo San Felipe de Barajas "
          a="Historia y la arquitectura colonial"
          b="Castillo de San Felipe de Barajas"
          c="Entradas a las atracciones turísticas"
          d="Duracion: 5 Hrs"
          precio="$ 30 USD"
        />
        <BookingCard
          imageSrc={islas}
          title="Rosario y Playa Blanca"
          rating="4.8"
          description="Disfruta de un día de sol y mar en las hermosas Islas del Rosario y la espectacular Playa Blanca. Navega por las aguas cristalinas del Caribe, haz snorkel en arrecifes de coral coloridos y relájate en las playas de arena blanca."
          a="Transporte en barco"
          b="Equipo de snorkel"
          c="Almuerzo típico caribeño en una de las islas."
          d="Duracion: 6 Hrs"
          precio="$ 26 USD"
        />
        <BookingCard
          imageSrc={cartagenaP}
          title="Tour Gastronómico por Cartagena"
          rating="4.6"
          description="Deléitate con los sabores auténticos de la cocina colombiana en un tour gastronómico por Cartagena. Descubre los secretos de la cocina local"
          a="Degustación de platos"
          b="Cultura culinaria de Colombia"
          c="Bebidas tradicionales colombianas incluidas"
          d="Duracion: 5 Hrs"
          precio="$ 23 USD"
        />
      </div>
    </>
  );
};

export default CartagenaT;
