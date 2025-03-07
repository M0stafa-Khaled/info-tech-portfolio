import { Link, NavLink, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import LogoutButton from "./LogoutButton";
import { menuIconVariants, navVariants } from "../../animations";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {
  links: {
    name: string;
    path: string;
  }[];
}

const Navbar = ({ links }: IProps) => {
  const {
    settings: { logo },
  } = useSelector((state: RootState) => state.settings);
  const activeLink = useLocation().pathname.split("/").pop();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="container pt-3 fixed w-full right-0 top-0 left-0 z-50">
      <nav className="flex lg:hidden container bg-dark flex-wrap items-center justify-between px-4 py-3 border border-dark-blue rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <button
            className="flex justify-center items-center lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <AnimatePresence mode="wait">
              {openNav ? (
                <motion.span
                  key="close-icon"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuIconVariants}
                >
                  <IoClose size={36} className="text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu-icon"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuIconVariants}
                >
                  <IoMenu size={36} className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <Link
            to={links[0].path}
            className="text-white cursor-pointer font-medium text-2xl"
          >
            <img src={logo || "/logo.webp"} alt="logo" className="w-full h-8" />
          </Link>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {openNav && (
            <motion.div
              key="mobile-nav"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
              className="w-full overflow-hidden"
            >
              <div className="mx-auto">
                <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  {links.map((link) => (
                    <li
                      key={link.name}
                      className="rounded-lg hover:bg-dark-blue lg:hover:bg-transparent transition-all duration-300 ease-in-out"
                    >
                      <NavLink
                        to={link.path}
                        className={` text-muted flex items-center text-base gap-[10px] py-2 px-4 lg:px-0 hover:text-white transition-all duration-300 ease-in-out ${
                          activeLink === link.path.split("/").pop() &&
                          "text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <LogoutButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
