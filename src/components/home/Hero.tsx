import { Button, Typography } from "@material-tailwind/react";
import heroImg from "../../assets/hero.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

const h1Style = {
  background:
    "linear-gradient(273.7deg, #122658 -2.44%, #C87BEA 45.91%, #EADC78 110.58%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const buttonGradientStyle = {
  background: "linear-gradient(96.53deg, #142D6C 0%, #0F1523 43.85%)",
};

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center py-10 lg:py-14">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-x-16 w-full">
        <div className="w-full lg:w-1/2 max-w-[500px] space-y-4">
          <h1
            style={h1Style}
            className="text-center lg:text-start font-normal lg:leading-[143px] text-3xl sm:text-5xl lg:text-8xl font-[MuseoModerno]"
          >
            Welcome
          </h1>
          <Typography
            variant="h3"
            className="text-white text-center lg:text-start text-2xl lg:text-2xl font-normal"
          >
            lets start in the way to make a professional{" "}
            <span className="text-[#ED6867]">designs!</span>
          </Typography>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-full max-w-lg h-full"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button
          style={buttonGradientStyle}
          variant="gradient"
          className="flex items-center gap-x-2 px-4 sm:px-6 md:px-9 py-2 sm:py-3 md:py-4  text-white text-sm md:text-xl border border-muted rounded-full normal-case font-medium"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
            console.log(window.innerHeight);
          }}
        >
          Start now with us{" "}
          <FiArrowRightCircle className="text-white h-4 md:h-6 w-4 md:w-6" />
        </Button>
        <div className="w-full flex flex-col justify-center items-center mt-4">
          <SlArrowDown size={40} className="text-[#C9C9CF] arrowOne" />
          <SlArrowDown size={40} className="-mt-6 text-[#C9C9CF] arrowTwo" />
          <SlArrowDown size={40} className="-mt-6 text-[#C9C9CF] arrowThree" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
