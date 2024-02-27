import BookingCard from "./Card.jsx";
import medellin from "../../Img/sitios/piedraPeñon.jpg";
import cartagena from "../../Img/sitios/cartagenaTorres.jpg";
import cali from "../../Img/sitios/comida.jpg";

const CityTours = () => {
  return (
    
      <div className="flex flex-wrap justify-center">
        <BookingCard
          imageSrc={medellin}
          title="City Tour Medellin"
          rating="5.0"
          description="Explora la ciudad de la eterna primavera con nuestro paquete turístico. Descubre la magia de Plaza Botero, siente la emoción en el Parque Arví y disfruta del Pueblito Paisa. Deléitate con un desayuno colombiano!"
          a="Pasadia Turistico Medellin"
          b="Transporte"
          c="Desayuno, Almuerzo, Refrigerio"
          d="Duracion: 12Hrs"
          precio="$ 89.000 COP"
        />
        <BookingCard
          imageSrc={cali}
          title="City Tour Cali"
          rating="4.9"
          description="Descubre la ciudad de Cali, cuna de la salsa. Explora el Barrio San Antonio y la Plaza de Cayzedo. Deléitate con un desayuno caleño antes de sumergirte en la historia. ¡Prepárate para bailar y vivir la pasión!"
          a="Pasadia Turistico Cali"
          b="Transporte"
          c="Desayuno, Almuerzo, Refrigerio"
          d="Duracion: 12Hrs"
          precio="$ 80.000 COP"
        />
        <BookingCard
          imageSrc={cartagena}
          title="City Tour Cartagena"
          rating="4.5"
          description="Explora la magia colonial y las playas de Cartagena. Descubre la Ciudad Amurallada y el Castillo de San Felipe. Disfruta de un desayuno caribeño antes de sumergirte en la historia. ¡Vive la experiencia de Cartagena!"
          a="Pasadia Turistico Cartagena"
          b="Transporte"
          c="Desayuno, Almuerzo, Refrigerio"
          d="Duracion: 12Hrs"
          precio="$ 100.000 COP"
          
        />
      </div>
  
  );
};

export default CityTours;
