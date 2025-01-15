import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center w-[90%] max-w-[1200px] mx-auto bg-white/30 backdrop-blur-md shadow-md rounded-lg p-4 font-google">
      <a href="#"><h1 className="text-3xl font-extrabold">Morocco</h1></a>
      <div className="flex items-center">
        <button
          className="text-xl text-black lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex text-xl font-semibold gap-7 lg:gap-10 lg:static absolute top-[70px] right-0 bg-white/80 lg:bg-transparent rounded-lg lg:rounded-none lg:backdrop-blur-none p-5 lg:p-0 lg:w-auto w-[60vw] shadow-lg lg:shadow-none transition-all duration-300`}
        >
          <a href="#tanger">
            <li className="py-2 md:py-0">Tanger</li>
          </a>
          <a href="#chefchaouen">
            <li className="py-2 md:py-0">Chefchaouen</li>
          </a>
          <a href="#fes">
            <li className="py-2 md:py-0">Fes</li>
          </a>
          <a href="#rabat">
            <li className="py-2 md:py-0">Rabat</li>
          </a>
          <a href="#marrakech">
            <li className="py-2 md:py-0">Marrakech</li>
          </a>
          <a href="#agadir">
            <li className="py-2 md:py-0">Agadir</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
