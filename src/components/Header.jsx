import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom"; // Importa NavLink desde React Router
import logo from "../../Img/logoPagina.png";
import RedesSociales from "../components/Redes.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="flex items-center justify-between xl:start w-full py-4 px-8 h-[10vh] z-50 bg-azul_o">
      <div className="w-auto text-center">
        <NavLink to="/inicio" onClick={handleLinkClick}>
          <img src={logo} alt="LOGO Daza" className="w-[35px] cursor-pointer" />
        </NavLink>
      </div>

      <nav
        className={`fixed
        z-10
        bg-azul_o
        w-[70%] xl:w-full 
        h-[100%] top-0 xl:static
        text-xl
        md:w-[40%]
        ${showMenu ? "left-0" : "-left-full"}
        flex-1 flex flex-col xl:flex-row 
        items-center justify-end gap-16 
        transition-all duration-500
        `}
      >
        <NavLink
          to="/inicio"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 border-scuba_blue"
              : "text-white hover:text-scuba_blue"
          }
          onClick={handleLinkClick}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/nosotros"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 border-scuba_blue"
              : "text-white hover:text-blue-200"
          }
          onClick={handleLinkClick}
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/destinos"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 border-scuba_blue"
              : "text-white hover:text-blue-200"
          }
          onClick={handleLinkClick}
        >
          Destinos
        </NavLink>
        <NavLink
          to="/tours"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 border-scuba_blue"
              : "text-white hover:text-blue-200"
          }
          onClick={handleLinkClick}
        >
          Paquetes Turísticos
        </NavLink>
        <NavLink
          to="/exp"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 border-scuba_blue"
              : "text-white hover:text-blue-200"
          }
          onClick={handleLinkClick}
        >
          Experiencias
        </NavLink>

        <RedesSociales />
      </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl p-2 xl:hidden"
      >
        {showMenu ? (
          <RiCloseFill className="text-white " />
        ) : (
          <RiMenu3Line className="text-white" />
        )}
      </button>
    </header>
  );
};

export default Header;
