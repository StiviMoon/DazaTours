import React from 'react'
import cartagena from "../../Img/sitios/cartagenaTorres.jpg";
import cali from "../../Img/sitios/casaAmarilla.jpg";
import medellin from "../../Img/sitios/piedraPeñon.jpg";

import Promo from '../components/Promo.jsx'


const Servicios = () => {
  return (
    <div className='h-[100%]' >

    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">


        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pb-[90px] ">
          <li>
            <a href="/tours" class="group block overflow-hidden">
              <img
                src={cartagena}
                alt="cartagena"
                class="h-[350px] w-full object-cover rounded-3xl transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center">
                  CARTAGENA
                </h3>

                <p class="mt-2 text-center">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> $ 660 USD </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/tours" class="group block overflow-hidden">
              <img
                src={cali}
                alt="cali"
                class="h-[350px] w-full object-cover rounded-3xl transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center">
                  CALI
                </h3>

                <p class="mt-2 text-center">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> $ 460 USD </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/tours" class="group block overflow-hidden">
              <img
                src={medellin}
                alt="medellin"
                class="h-[350px] w-full object-cover rounded-3xl transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center">
                  MEDELLIN
                </h3>

                <p class="mt-2 text-center">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> $ 540 USD </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
        <Promo/>  
      </div>

    </section>

  </div>
  )
}

export default Servicios