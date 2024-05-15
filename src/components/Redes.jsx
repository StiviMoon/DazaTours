import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const RedesSociales = () => {
  const redesSociales = [
    {
      nombre: "Facebook",
      icono: <FaFacebookF />,
      color: "bg-scuba_blue",
      url: "https://www.facebook.com",
    },
    {
      nombre: "Instagram",
      icono: <FaInstagram />,
      color: "bg-magenta",
      url: "https://www.instagram.com/dazatours.col?igsh=MThvNGZya3E4dGM3Yw==",
    },
    {
      nombre: "WhatsApp",
      icono: <FaWhatsapp />,
      color: "bg-verde_o",
      url: "https://wa.me/c/573045449727",
    },
    // Puedes agregar más redes sociales aquí
  ];

  return (
    <div className="flex justify-center space-x-6 p-6">
      {redesSociales.map((red) => (
        <a
          key={red.nombre}
          href={red.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block p-2 rounded-full text-white ${red.color} transition-transform transform hover:scale-110`}
        >
          {red.icono}
        </a>
      ))}
    </div>
  );
};

export default RedesSociales;
