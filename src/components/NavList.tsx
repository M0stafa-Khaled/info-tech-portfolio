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
      name: "الصفحة الرئيسية",
      to: "/",
      icon: <HomeIcon />,
    },
    {
      name: "معلومات عنا",
      to: "/about",
      icon: <AboutIcon />,
    },
    {
      name: "خدماتنا",
      to: "/services",
      icon: <ServicesIcon />,
    },
    {
      name: "مشاريعنا",
      to: "/projects",
      icon: <ProjectsIcon />,
    },
    {
      name: "اتصل بنا",
      to: "/contact",
      icon: <ContactIcon />,
    },
  ];

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link) => (
        <li
          key={link.name}
          className="rounded-lg hover:bg-dark-blue lg:hover:bg-transparent transition-all duration-300 ease-in-out"
        >
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-white flex items-center text-base gap-[10px] py-2 px-4 lg:px-0"
                : "text-muted flex items-center text-base gap-[10px] py-2 px-4 lg:px-0 hover:text-white transition-all duration-300 ease-in-out"
            }
            aria-current="page"
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
