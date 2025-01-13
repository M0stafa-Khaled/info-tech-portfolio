import { Typography } from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import SocialLinkIcon from "./SocialLinkIcon";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FiInstagram className="text-white" size={20} />,
      link: "/",
    },
    {
      icon: <FiFacebook className="text-white" size={20} />,
      link: "/",
    },
    {
      icon: <FiLinkedin className="text-white" size={20} />,
      link: "/",
    },
    {
      icon: <FaWhatsapp className="text-white" size={20} />,
      link: "/",
    },
  ];

  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "Our Services",
      to: "/services",
    },
    {
      name: "Our Projects",
      to: "/projects",
    },
    {
      name: "Contact Us",
      to: "/contact",
    },
  ];

  return (
    <footer className="container rounded-3xl mt-8 lg:mt-[72px] mb-6 lg:mb-12">
      <div className="bg-background-gradient px-0 py-4 md:px-24 md:py-10 rounded-3xl space-y-9 border border-dark-blue">
        <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 lg:space-x-12 space-y-6 lg:space-y-0">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start px-3 md:px-6 lg:w-1/2 space-y-6">
            <Link
              to={"/"}
              className="capitalize font-medium text-white text-3xl"
            >
              <img src={logo} alt="logo" className="w-full h-8" />
            </Link>
            <Typography
              variant="paragraph"
              className="text-muted text-center lg:text-left text-lg"
            >
              A software development company that provides comprehensive
              services in the field of technological software and design.
            </Typography>
            <div>
              <Typography
                variant="h3"
                className="text-white text-2xl font-normal text-center lg:text-left"
              >
                Follow us
              </Typography>
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
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-6">
            <Typography
              variant="h3"
              className="text-white text-2xl font-normal"
            >
              Links
            </Typography>
            <nav className="space-y-2 text-lg">
              {navLinks.map((navLink, idx) => (
                <Link
                  key={idx}
                  to={navLink.to}
                  className="flex text-muted justify-center items-center lg:justify-start"
                >
                  {navLink.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {/* Line */}
        <div className="flex justify-center items-center">
          <hr className="w-3/4 border-muted" />
        </div>
        {/* Copyright */}
        <div className="flex flex-col justify-center items-center text-white px-6 gap-y-4">
          <Typography
            variant="paragraph"
            className="text-muted text-center text-base lg:text-lg"
          >
            {new Date().getFullYear()} &copy; All rights reserved Info Tech
          </Typography>
          <Link to={"/"} className="text-white ml-1">
            <img src={logo} alt="logo" className="w-full h-8" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
