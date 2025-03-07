import { Link, NavLink, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {
  links: {
    name: string;
    path: string;
  }[];
}

const Sidebar = ({ links }: IProps) => {
  const {
    settings: { logo },
  } = useSelector((state: RootState) => state.settings);
  const activeLink = useLocation().pathname.split("/")[3];

  return (
    <aside className="hidden lg:block h-full overflow-hidden bg-dark border-l border-dark-blue">
      <div className="h-full min-w-[260px] overflow-y-auto custom-scrollbar py-6 flex flex-col justify-between">
        <div className="space-y-9">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link to={"/dashboard/admin"}>
              <img src={logo || "/logo.webp"} alt="logo" className="max-w-48" />
            </Link>
          </div>
          {/* Links */}
          <nav>
            <ul className="w-full">
              {links.map((link, idx) => {
                return (
                  <li key={idx} className="w-full">
                    <NavLink
                      to={link.path}
                      className={`block w-full text-center p-4 text-white transition-all duration-300 ${
                        activeLink === link.path.split("/")[3] && "bg-blue"
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Logout */}
        </div>
        <div className="flex justify-center items-center px-2">
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
