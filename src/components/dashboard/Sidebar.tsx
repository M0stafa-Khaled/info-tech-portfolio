import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";
import Modal from "../shared/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/auth/authSlice";

interface IProps {
  links: {
    name: string;
    path: string;
  }[];
}

const Sidebar = ({ links }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeLink = useLocation().pathname.split("/")[3];
  const dispatch = useDispatch();
  const logoutFromDashboard = () => {
    dispatch(logout());
  };
  return (
    <aside className="hidden lg:block h-full overflow-hidden bg-dark border-l border-dark-blue">
      <div className="h-full min-w-[300px] overflow-y-auto custom-scrollbar py-9 flex flex-col justify-between">
        <div className="space-y-9">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link to={"/dashboard/admin"}>
              <img src={logo} alt="logo" className="max-w-48" />
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
                      className={`block w-full text-center p-6 text-xl text-white transition-all duration-300 ${
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
        <div className="flex justify-center items-center">
          <Button
            onClick={() => setIsOpen(true)}
            className="border text-xl border-[#F44250] text-[#F44250] hover:border-[#ff0000] hover:text-[#ff0000] rounded-xl w-4/5 py-3"
          >
            تسجيل الخروج
          </Button>
        </div>
      </div>

      {/* Logout Modal */}
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="تسجيل الخروج"
        description="هل انت متاكد من تسجيل الخروج؟"
      >
        <div className="flex flex-col gap-y-3">
          <Button
            onClick={logoutFromDashboard}
            className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4"
          >
            تسجيل الخروج
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
          >
            إلغاء
          </Button>
        </div>
      </Modal>
    </aside>
  );
};

export default Sidebar;
