import React from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import NavList from "./NavList";
import logo from "../assets/logo.png";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="container pt-3 fixed w-full right-0 top-0 left-0 z-50">
      <nav className="container">
        <div className="bg-dark flex flex-wrap items-center justify-between px-4 py-3 border border-dark-blue rounded-2xl">
          <div className="flex items-center justify-between w-full">
            <div className="hidden lg:block">
              <NavList />
            </div>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[40px] max-h-[40px] rounded-lg text-xs h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 ease-in-out">
                {openNav ? (
                  <IoClose
                    size={36}
                    className="text-white transition-all duration-300"
                  />
                ) : (
                  <IoMenu
                    size={36}
                    className="text-white transition-all duration-300"
                  />
                )}
              </span>
            </button>
            <Link
              to="/"
              className="text-white cursor-pointer font-medium text-2xl"
            >
              <img src={logo} alt="logo" className="w-full h-8" />
            </Link>
          </div>
          {/* Mobile menu */}
          <div
            className={`block lg:hidden w-full transition-all linear duration-700 overflow-hidden ${
              openNav ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="mx-auto">
              <NavList />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
