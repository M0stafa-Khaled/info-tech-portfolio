import React from "react";
import { IconButton, Collapse } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import NavList from "./NavList";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="container pt-12">
      <div className="container">
        <div className="bg-dark flex flex-wrap items-center justify-between px-4 py-3 border border-dark-blue rounded-2xl">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="text-white cursor-pointer font-medium text-2xl"
            >
              Info Tech
            </Link>
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
          </div>
          <Collapse open={openNav} className="block lg:hidden">
            <div className="container mx-auto">
              <NavList />
            </div>
          </Collapse>
        </div>
      </div>
    </nav>
  );
};

export default Header;
