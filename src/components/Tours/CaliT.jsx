import BookingCard from "../Card.jsx";
import tactito from "../../../Img/daza/disparos3.jpeg";
import guacamaya from "../../../Img/sitios/guacamaya.jpg";
import montañas from "../../../Img/sitios/montañas.jpg";

const CaliT = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <BookingCard
        imageSrc={tactito}
        title="Pack Tactico Poligo / Cali"
        rating="4.9"
        description="Explora la arte de la guerra. Domina tácticas letales y técnicas de defensa personal. Adéntrate en el mundo de la supervivencia y alcanza tu máximo potencial. ¡Prepárate para defenderte y sobrevivir en cualquier situación!"
        a="Poligono"
        b="Rapel"
        c="Desayuno, Almuerzo, Refrigerio"
        d="Duracion: 12 Hrs"
        precio="$ 250 USD"
      />
      <BookingCard
        imageSrc={montañas}
        title="Cali alrededores / Afueras"
        rating="4.9"
        description="Descubre la magia de la naturaleza. Sumérgete en la vasta belleza de las montañas y admira el espectáculo de aves en su hábitat natural. Aventúrate en un viaje lleno de emoción y conexión con la vida silvestre."
        a="Dapa, Cumbre, Restrepo, Darien"
        b="Transporte"
        c="Desayuno, Almuerzo, Refrigerio"
        d="Duracion: 6 Hrs"
        precio="$ 30 USD"
      />
      <BookingCard
        imageSrc={guacamaya}
        title="Hacienda Paraiso"
        rating="4.9"
        description="Embárcate en una aventura única en la Hacienda El Paraíso. Descubre su encanto colonial y sumérgete en la historia de Colombia. Experimenta la emoción del parapente sobre paisajes impresionantes."
        a="Parapente (Opcional)"
        b="Tarjeta Medica"
        c="Desayuno, Almuerzo, Refrigerio"
        d="Duracion: 8 Hrs"
        precio="$ 20 USD"
      />
    </div>
  );
};

export default CaliT;
