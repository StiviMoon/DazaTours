import React from 'react'
import nosotros1 from '../../Img/daza/1.jpeg'
import nosotros2 from '../../Img/daza/2.jpeg'
import nosotros3 from '../../Img/daza/3.jpeg'
import nosotros4 from '../../Img/daza/4.jpeg'
import nosotros5 from '../../Img/daza/5.jpeg'
import nosotros6 from '../../Img/daza/6.jpeg'


const GaleriaNosotros = () => {
  return (
    <section className="text-azul_o body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-mostaza lg:w-1/3 lg:mb-0 mb-4">Momentos inolvidables con nosotros</h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg">Sumérgete en una experiencia única y llena de momentos inolvidables con nosotros. Cada viaje con nuestra empresa es una oportunidad para crear recuerdos que perdurarán para siempre. Desde paisajes impresionantes hasta encuentros culturales enriquecedores, capturamos la esencia de cada momento en imágenes que cuentan historias. Nuestro compromiso es mostrar la belleza y diversidad del mundo a través de fotografías que reflejan la magia de cada aventura.</p>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-4 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl " src={nosotros4} />
          </div>
          <div className="md:p-4 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl " src={nosotros3} />
          </div>
          <div className="md:p-4 p-1 w-full">
            <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl " src={nosotros5} />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-4 p-1 w-full">
            <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl " src={nosotros6} />
          </div>
          <div className="md:p-4 p-1 w-2/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 transition-transform duration-300 rounded-xl " src={nosotros2} />
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}

export default GaleriaNosotros