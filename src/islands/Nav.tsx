import { useState } from "react";
import burguer from "../assets/burguer.svg";
import Logo from "../components/Logo";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 w-full bg-white dark:bg-light-black fixed z-50 md:static max-w-6xl mx-auto">
      <div className="left">
        <a href="/" className="block">
          <Logo />
        </a>
      </div>

      <div className="right">
        <img
          src={burguer.src}
          onClick={toggleMenu}
          className="md:hidden"
          alt="Logo"
        />

        <ul
          id="nav-links"
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col justify-center items-center bg-primary-300  py-6 px-4 gap-6 top-12 left-0 w-full  md:flex md:static md:flex-row md:bg-transparent md:w-auto md:gap-8 fixed min-h-dvh md:min-h-0`}
        >
          <li>
            <a
              href="/cursos"
              className="text-black/80 dark:text-white hover:underline"
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              href="/proyectos"
              className="text-black/80 dark:text-white hover:underline"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/empleos"
              className="text-black/80 dark:text-white hover:underline"
            >
              Empleos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
