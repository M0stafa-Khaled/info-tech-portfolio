import BgImage from "../components/BgImage";
import AboutUs from "../components/home/AboutUs";
import AnimatedScrollLogo from "../components/home/AnimatedScrollLogo";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <>
      <BgImage />
      <Hero />
      <AnimatedScrollLogo />
      <AboutUs />
    </>
  );
};

export default Home;
