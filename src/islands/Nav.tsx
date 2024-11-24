import { useState } from "react";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 pt-2 pb-4 md:py-2 w-full bg-slate-100 dark:bg-light-black fixed z-50 md:static max-w-6xl mx-auto lg:px-0">
      <div className="left">
        <a href="/" className="block">
          <Logo />
        </a>
      </div>

      <div className="right relative">
        <ThemeToggle />
        <svg
          className="md:hidden"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <path
            className=" stroke-black dark:stroke-white"
            d="M4 5H20M4 12H20M4 19H20"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <ul
          id="nav-links"
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col justify-center items-center bg-primary-300  py-6 px-4 gap-6 top-14 left-0 w-full  md:flex md:static md:flex-row md:bg-transparent md:w-auto md:gap-8 fixed min-h-dvh md:min-h-0`}
        >
          <li>
            <a
              href="/blackfriday"
              className="text-black/80 font-semibold text-2xl md:text-base dark:text-white hover:underline"
            >
              BLACKFRIDAY
            </a>
          </li>
          <li>
            <a
              href="/cursos"
              className="text-black/80 font-semibold text-2xl md:text-base dark:text-white hover:underline"
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              href="/proyectos"
              className="text-black/80 font-semibold text-2xl md:text-base dark:text-white hover:underline"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/recursos"
              className="text-black/80 font-semibold text-2xl md:text-base dark:text-white hover:underline"
            >
              Recursos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
