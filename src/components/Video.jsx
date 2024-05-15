import React from "react";
import finca from "../../Img/Finca.mp4";

const tours = [
  {
    title: "Juego de Paintball",
    description:
      "Siente la adrenalina mientras compites con amigos y familiares en nuestro emocionante campo de paintball",
    color: "mostaza",
  },
  {
    title: "Tejo",
    description:
      "Disfruta del deporte tradicional colombiano y prueba tu puntería",
    color: "mostaza",
  },
  {
    title: "Tiro al Arco",
    description:
      "Desafía tus habilidades de precisión y concentra tu puntería en nuestro tiro al arco.",
    color: "scuba_blue",
  },
  {
    title: "Cancha de Fútbol",
    description: "Disfruta de un partido de fútbol en nuestra amplia cancha.",
    color: "magenta",
  },
  {
    title: "Caminata por el Río",
    description:
      "Sumérgete en la naturaleza con una caminata revitalizante junto al río",
    color: "scuba_blue",
  },
  {
    title: "Billar y Bolera",
    description:
      "Diviértete con una partida de billar o demuestra tus habilidades en la bolera.",
    color: "magenta",
  },
];

const ExploreSection = () => {
  return (
    <>
      <div className="flex justify-center items-center  pt-11">
        <section className="bg-white text-center dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold  text-azul_o lg:text-5xl dark:text-white">
              Explora las afueras de <br></br>
              <span className="text-mostaza">Medellín</span>
              <span className="text-magenta"> en esta </span>
              <span className="text-scuba_blue"> hermosa finca</span>
            </h1>

            <div className="flex justify-center mt-12">
              <iframe
                className="w-full md:w-[820px] h-64 md:h-[465px] rounded-xl overflow-hidden"
                src={finca}
              ></iframe>
            </div>
            <h1 className="text-4xl pt-10 font-bold text-verde_o">
              Actividades
            </h1>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 pb-10">
              {tours.map((tour, index) => (
                <div
                  key={index}
                  className={`p-6 border rounded-xl border-r-${tour.color} hover:scale-105 hover:cursor-pointer transition-transform duration-300 dark:border-${tour.color}`}
                >
                  <div className="md:flex md:items-start md:-mx-4">
                    <span
                      className={`inline-block p-2 bg-${tour.color} rounded-xl md:mx-4 `}
                    ></span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1
                        className={`text-xl text-${tour.color} font-bold capitalize dark:text-white`}
                      >
                        {tour.title}
                      </h1>

                      <p className="mt-3 text-azul_o dark:text-gray-300">
                        {tour.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExploreSection;
