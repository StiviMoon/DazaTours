import BookingCard from "../Card.jsx";
import medellin from "../../../Img/medellin.jpg";
import piedra from "../../../Img/sitios/piedraPeñon.jpg";
import guitarra from "../../../Img/sitios/guitarra.jpg";



const MedellinT = () => {
  return (
    
      <div className="flex flex-wrap justify-center">
        <BookingCard
          imageSrc={medellin}
          title="Finca Envigado"
          rating="5.0"
          description="
          Descubre la emoción en una finca en Envigado, Medellín. Disfruta de actividades como caminatas por el río, clases de salsa y capoeira, karaoke, tejo, paintball, tiro con arco, voli rana y cabalgatas. ¡Una experiencia inolvidable llena de diversión y aventura te espera!"
          a="Pasadia Turistico"
          b="Transporte"
          c="Desayuno, Almuerzo, BBQ"
          d="Duracion: 24Hrs"
          precio="$ 250.000 COP"
        />
        <BookingCard
          imageSrc={piedra}
          title="Guatape"
          rating="5.0"
          description="Embárcate en un emocionante viaje hacia la majestuosa Piedra del Peñol en Guatapé. Disfruta de las vistas panorámicas después de subir los 740 escalones hasta la cima y explora el encantador pueblo de Guatapé. Además, disfruta de deliciosa comida local incluida en esta experiencia."
          a="Pasadia Turistico"
          b="Transporte"
          c="Almuerzo"
          d="Duracion: 5Hrs"
          precio="$ 110.000 COP"
        />
        <BookingCard
          imageSrc={guitarra}
          title="Comuna 13"
          rating="5.0"
          description="Embárcate en una emocionante caminata por la Comuna 13 en Medellín y sumérgete en su fascinante cultura. Explora sus vibrantes murales, conoce a los talentosos artistas locales y disfruta de la deliciosa gastronomía mientras aprendes sobre la transformación social de esta comunidad."
          a="Pasadia Turistico"
          b="Transporte"
          c="Almuerzo, Refrigerio"
          d="Duracion: 6Hrs"
          precio="$ 99.000 COP"
        />

      </div>
  
  );
};

export default MedellinT;
