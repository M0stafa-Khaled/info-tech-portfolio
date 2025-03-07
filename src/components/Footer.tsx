import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import SocialLinkIcon from "./SocialLinkIcon";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { HiOutlineDownload } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Footer = () => {
  const {
    settings: { logo, facebook, instagram, twitter, phone },
  } = useSelector((state: RootState) => state.settings);
  const socialLinks = [
    {
      icon: <FiInstagram className="text-white" size={20} />,
      link: instagram || "/",
    },
    {
      icon: <FiFacebook className="text-white" size={20} />,
      link: facebook || "/",
    },
    {
      icon: <FiTwitter className="text-white" size={20} />,
      link: twitter || "/",
    },
    {
      icon: <FaWhatsapp className="text-white" size={20} />,
      link: `https://api.whatsapp.com/send?phone=${phone || 201016440812}`,
    },
  ];

  const navLinks = [
    {
      name: "الصفحة الرئيسية",
      to: "/",
    },
    {
      name: "معلومات عنا",
      to: "/about",
    },
    {
      name: "خدماتنا",
      to: "/services",
    },
    {
      name: "مشاريعنا",
      to: "/projects",
    },
    {
      name: "اتصل بنا",
      to: "/contact",
    },
  ];

  return (
    <footer className="container rounded-3xl mt-8 lg:mt-[72px] mb-6 lg:mb-12">
      <div className="bg-background-gradient px-0 py-4 md:px-24 md:py-10 rounded-3xl space-y-6 border border-dark-blue">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-6 lg:gap-y-0">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start px-3 md:px-6 lg:w-1/2 space-y-6">
            <Link
              to={"/"}
              className="capitalize font-medium text-white text-3xl"
            >
              <img
                src={logo || "/logo.webp"}
                alt="logo"
                className="w-full h-8"
              />
            </Link>
            <p className="text-muted text-center lg:text-start leading-relaxed">
              شركة تطوير برمجيات متخصصة في تقديم خدمات شاملة في مجال البرمجيات
              والتصميم التكنولوجي.
            </p>
            <div>
              <h3 className="text-white text-xl font-normal text-center lg:text-right">
                تابعنا
              </h3>
              <div className="mt-6 flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
                {socialLinks.map((social, idx) => (
                  <SocialLinkIcon
                    key={idx}
                    icon={social.icon}
                    link={social.link}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-start  lg:w-1/2 gap-y-6">
            <h3 className="text-white text-xl font-normal">روابط سريعة</h3>
            <nav className="space-y-2 text-lg">
              {navLinks.map((navLink, idx) => (
                <Link
                  key={idx}
                  to={navLink.to}
                  className="flex text-base text-muted justify-center items-center lg:justify-start transition-all duration-300 hover:text-white"
                >
                  {navLink.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {/* Download Button */}
        <div className="flex justify-center items-center">
          <Button className="text-white rounded-full bg-dark ">
            <Link
              to={""}
              target="_blank"
              className="px-4 py-3 flex items-center gap-x-2"
            >
              تحميل التطبيق
              <HiOutlineDownload size={20} />
            </Link>
          </Button>
        </div>
        {/* Line */}
        <div className="flex justify-center items-center">
          <hr className="w-3/4 border-muted" />
        </div>
        {/* Copyright */}
        <div className="flex flex-col justify-center items-center text-white px-6 gap-y-2">
          <p className="text-muted text-center text-base">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
          </p>
          <Link to={"/"} className="text-white mr-1">
            <img src={logo || "/logo.webp"} alt="logo" className="w-full h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
