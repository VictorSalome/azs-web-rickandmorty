import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import LogoRickAndMorty from "../../assets/LogoRickAndMorty.png";
import Bagroud from "../../assets/RickBackgroudSpace.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full "
      style={{ backgroundImage: `url(${Bagroud})`, zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={LogoRickAndMorty}
                alt="LogoRickAndMorty"
                className="h-12 w-auto rounded-lg"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-bold"
              >
                Inicio
              </Link>
              <Link
                to="/favorites"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-bold"
              >
                Favoritos
              </Link>
            </div>
          </div>
          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              {menuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Inicio
            </Link>
            <Link
              to="/favorites"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Favoritos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
