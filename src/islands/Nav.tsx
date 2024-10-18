import { useState } from 'react';
import logoDark from "../assets/logo.svg";
import burguer from "../assets/burguer.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 w-full bg-light-black relative max-w-6xl mx-auto">
      <div className="left">
        <a href="/" className="block">
          <img src={logoDark.src} alt="Logo" />
        </a>
      </div>

      <div className="right">
        
        <img src={burguer.src} onClick={toggleMenu} className="md:hidden" alt="Logo" />

        <ul
          id="nav-links"
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col justify-center items-center bg-black-border py-6 px-4 gap-6 absolute top-12 left-0 w-full z-20 md:flex md:static md:flex-row md:bg-transparent md:w-auto md:gap-8`}
        >
          <li><a href="/cursos" className="text-white hover:underline">Cursos</a></li>
          <li><a href="/proyectos" className="text-white hover:underline">Proyectos</a></li>
          <li><a href="/empleos" className="text-white hover:underline">Empleos</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
