import React from 'react'
import guitarra from "../../Img/sitios/guitarra.jpg";


const Promo = () => {

  const openWhatsAppDescont = () => {
    const message = encodeURIComponent("¡Hola! Me gustaria el descuento del 20%");
    const whatsappURL = `https://wa.me/573045449727?text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <section class="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
        <img
            alt="Trainer"
            src={guitarra}
            class="h-32 w-full object-cover md:h-full"
        />

    <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 justify-center">
        <p class="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

        <h2 class="mt-6 font-black uppercase">
        <span class="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>

        <span class="mt-2 block text-sm">On your next order over $620</span>
        </h2>

        <button
        class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
        onClick={openWhatsAppDescont}
        >
        Get Discount
        </button>

        <p class="mt-8 text-xs font-medium uppercase text-gray-400">
        
¡Oferta Especial! ¡Reserva ahora tus tours en Colombia y aprovecha nuestro increíble descuento para futuras aventuras! Por cada compra de tours que sumen un total de $640 dólares o más, recibirás un descuento del 20% en tu próxima reserva con nosotros.
        </p>
        <p class="mt-8 text-xs font-medium uppercase text-gray-400">
        
        Con esta oferta exclusiva, podrás disfrutar de tus experiencias en Colombia al máximo y aún ahorrar en tus próximas vacaciones. No te pierdas la oportunidad de explorar todos los rincones de este maravilloso país y sus alrededores mientras ahorras en tus futuras aventuras con nosotros.
        </p>
        <p class="mt-8 text-xs font-medium uppercase text-gray-400">
        Offer valid until 24th March, 2024 
        </p>
    </div>
</section>
  )
}

export default Promo