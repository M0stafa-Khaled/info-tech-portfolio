import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";

interface IProps {
  links: {
    name: string;
    path: string;
  }[];
}

const Sidebar = ({ links }: IProps) => {
  const activeLink = useLocation().pathname.split("/").pop();
  return (
    <aside className="hidden lg:block h-full overflow-hidden bg-dark">
      <div className="h-full min-w-[300px] overflow-y-auto custom-scrollbar pt-9 space-y-9">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="max-w-56" />
        </div>
        {/* Links */}
        <nav>
          <ul className="w-full">
            {links.map((link, idx) => {
              return (
                <li key={idx} className="w-full">
                  <NavLink
                    to={link.path}
                    className={`block w-full text-center p-6 text-xl text-white transition-all duration-300 ${
                      activeLink === link.path.split("/").pop() && "bg-blue"
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
        <div className="flex justify-center items-center">
          <Button className="border text-xl border-[#F44250] text-[#F44250] hover:border-[#ff0000] hover:text-[#ff0000] rounded-xl w-4/5 py-3">
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
