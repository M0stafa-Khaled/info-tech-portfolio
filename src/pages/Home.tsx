import BgImage from "../components/BgImage";
import AboutUs from "../components/home/AboutUs";
import AnimatedScrollLogo from "../components/home/AnimatedScrollLogo";
import Hero from "../components/home/Hero";
import OurProjects from "../components/home/OurProjects";
import OurServices from "../components/home/OurServices";

const Home = () => {
  return (
    <>
      <BgImage />
      <Hero />
      <AnimatedScrollLogo />
      <AboutUs />
      <OurServices />
      <OurProjects />
    </>
  );
};

export default Home;
