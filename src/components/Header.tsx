import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import NavList from "./NavList";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuIconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <header className="container pt-3 fixed w-full right-0 top-0 left-0 z-50">
      <nav>
        <div className="bg-dark flex flex-wrap items-center justify-between px-4 py-3 border border-dark-blue rounded-2xl">
          <div className="flex items-center justify-between w-full">
            <div className="hidden lg:block">
              <NavList />
            </div>
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
              to="/"
              className="text-white cursor-pointer font-medium text-2xl"
            >
              <img src="/logo.webp" alt="logo" className="w-full h-8" />
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
                className="block lg:hidden w-full overflow-hidden"
              >
                <div className="mx-auto">
                  <NavList />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
