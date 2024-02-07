import React from 'react';


import dazatours from '../../Img/daza/dazatours.png'
import dverde from '../../Img/daza/dverde.png'



const FeatureSection = () => {
  return (
    <>
    <section className="text-azul_o body-font">
      
      <div className="container px-5 mx-auto flex flex-wrap pt-4 pb-10">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className=" object-center h-full w-full p-10 "
            src={dazatours}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center xl:pt-24">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-mostaza text-scuba_blue mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              
            </div>
            <div className="flex-grow">
              
              <h2 className="text-scuba_blue text-3xl title-font font-bold  mb-3">Misión</h2>
              <p className="leading-relaxed text-base">Nuestra misión es hacer que experimentes la esencia vibrante de Colombia de una manera única y apasionante. Nos dedicamos a ofrecerte momentos llenos de emoción y aprendizaje, para que te sumerjas en la energía única de Cali, explores la historia de Cartagena y descubras los encantos de Medellín. Guiados por nuestra pasión y entusiasmo, te garantizamos experiencias inolvidables que te permitirán descubrir la riqueza cultural de Colombia como nunca antes. ¡Únete a nosotros y vive la aventura de tu vida!</p>
              <a href="#!" className="mt-3 text-verde_o inline-flex items-center">Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-scuba_blue text-mostaza mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-mostaza text-3xl title-font font-bold  mb-3">Visión</h2>
              <p className="leading-relaxed text-base">Nuestra visión en Daza Tours es destacarnos como el líder indiscutible en la industria del turismo en Colombia. Nos dedicamos a ofrecer experiencias turísticas únicas y emocionantes que resalten la diversidad y la belleza de nuestro país. Buscamos ser reconocidos por nuestra pasión por compartir la cultura colombiana, nuestro compromiso con la calidad y la satisfacción del cliente, y nuestro impacto positivo en las comunidades locales y el medio ambiente. ¡Únete a nosotros en este viaje hacia un futuro lleno de aventuras y descubrimientos inolvidables!</p>
              <a href="#!" className="mt-3 text-verde_o inline-flex items-center">Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          

        </div>
        
      </div>
    </section>
    <section className="text-azul_o body-font">
      
      <div className="container px-5 mx-auto flex flex-wrap pt-4 pb-10">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-[540px] p-16 "
            src={dverde}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center xl:pt-24">
          <div className="flex flex-col mb-10 lg:items-start items-center">
           
            <div className="flex-grow">
              
              <h2 className="text-scuba_blue text-xl xl:text-4xl title-font font-bold pb-5 mb-3">Compromiso con la comunidad y el medio ambiente</h2>
              <p className="leading-relaxed xl:text-lg">En Daza Tours, nuestra dedicación hacia la sociedad y el medio ambiente es inquebrantable. Nos comprometemos a realizar voluntariados con un enfoque especial en los niños, buscando siempre contribuir positivamente a la comunidad. Además, estamos comprometidos con la preservación del medio ambiente, brindando apoyo a las comunidades locales con responsabilidad social. Como parte de nuestro compromiso, nos hemos asociado con la <span className='font-bold'> Fundación Afecto y Efecto</span>, una organización que respalda proyectos sociales y ambientales. Juntos, trabajamos para crear un impacto positivo en el mundo que nos rodea y en las generaciones futuras.</p>
              
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
          
            <div className="flex-grow">
              <h2 className="text-mostaza text-xl xl:text-4xl title-font font-bold pb-5 mb-3">Valores corporativos</h2>
              <p className="leading-relaxed  xl:text-lg">Los valores centrales de Daza Tours abarcan la pasión por compartir la riqueza cultural y natural de Colombia, el compromiso con la excelencia en la calidad del servicio y la satisfacción del cliente, así como una firme responsabilidad social y ambiental en todas nuestras operaciones. Estos principios fundamentales guían cada aspecto de nuestra empresa y definen nuestra dedicación hacia experiencias turísticas auténticas y sostenibles.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    </>
  );
};

export default FeatureSection;






