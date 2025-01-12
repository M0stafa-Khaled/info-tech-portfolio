import { NavLink } from "react-router-dom";
import ContactIcon from "./svg/ContactIcon";
import AboutIcon from "./svg/AboutIcon";
import HomeIcon from "./svg/HomeIcon";
import ServicesIcon from "./svg/ServicesIcon";
import ProjectsIcon from "./svg/ProjectsIcon";
import { ReactNode } from "react";

const NavList = () => {
  interface ILink {
    name: string;
    to: string;
    icon: ReactNode;
  }
  const links: ILink[] = [
    {
      name: "Home",
      to: "/",
      icon: <HomeIcon />,
    },
    {
      name: "About Us",
      to: "/about",
      icon: <AboutIcon />,
    },
    {
      name: "Our Services",
      to: "/services",
      icon: <ServicesIcon />,
    },
    {
      name: "Our Projects",
      to: "/projects",
      icon: <ProjectsIcon />,
    },
    {
      name: "Contact Us",
      to: "/contact",
      icon: <ContactIcon />,
    },
  ];

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link) => (
        <li
          key={link.name}
          className="py-2 px-4 lg:px-0 rounded-lg hover:bg-dark-blue lg:hover:bg-transparent transition-all duration-300 ease-in-out"
        >
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-white flex items-center text-base md:p-0"
                : "text-muted flex items-center text-base md:p-0 hover:text-white transition-all duration-300 ease-in-out"
            }
            aria-current="page"
          >
            <span className="mr-[10px]">{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
