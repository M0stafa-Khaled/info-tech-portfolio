import React from "react";
import { IconButton, Collapse } from "@material-tailwind/react";
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
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <IoClose size={36} className="text-white" />
              ) : (
                <IoMenu size={36} className="text-white" />
              )}
            </IconButton>
            <Link
              to="/"
              className="text-white cursor-pointer font-medium text-2xl"
            >
              <img src={logo} alt="logo" className="w-full h-8" />
            </Link>
          </div>
          {/* Mobile menu */}
          <Collapse open={openNav} className="block lg:hidden">
            <div className="mx-auto">
              <NavList />
            </div>
          </Collapse>
        </div>
      </nav>
    </header>
  );
};

export default Header;
