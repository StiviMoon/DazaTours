import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import logo from "../../Img/logoPagina.png";


import RedesSociales from '../components/Redes.jsx';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:start w-full py-4 px-8 h-[12vh] z-50 bg-azul_o">
      <div className="w-auto text-center">
        <Link to="/inicio">
          <img src={logo} alt="LOGO Daza" className="w-[40px] cursor-pointer" />
        </Link>
      </div>

      <nav
        className={`fixed
        z-10
       bg-azul_o
        w-[70%] xl:w-full 
        h-[100%] top-0 xl:static 3
        text-xl
        md:w-[40%]
        ${showMenu ? "left-0" : "-left-full"}
        flex-1 flex flex-col xl:flex-row 
        items-center justify-end gap-16 
        transition-all duration-500
        `}
      >
        
        <Link to="/inicio" className="text-white text-[1.3rem] hover:text-blue-200">
          Inicio
        </Link>
        <Link to="/nosotros" className="text-white text-[1.3rem] hover:text-blue-200">
          Nosotros
        </Link>
        <Link to="/destinos" className="text-white text-[1.3rem] hover:text-blue-200">
          Destinos
        </Link>
        <Link to="/tours" className="text-white text-[1.3rem] hover:text-blue-200">
          Paquetes Turisticos
        </Link>
        <Link to="/exp" className="text-white text-[1.3rem] hover:text-blue-200">
          Experiencias
        </Link>


        <RedesSociales/>

        

      </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl p-2 xl:hidden"
      >
        {showMenu ? <RiCloseFill className="text-white " /> : <RiMenu3Line className="text-white" />}
      </button>
    </header>
  );
};

export default Header;
