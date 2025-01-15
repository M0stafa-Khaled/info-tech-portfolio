import servicesImage from "../assets/service.png";
import designingImage from "../assets/service-designing.png";
import codingImage from "../assets/service-coding.png";
import hostingImage from "../assets/service-hosting.png";
import softwareImage from "../assets/service-software-engineering.png";
import socialImage from "../assets/service-social-media.png";
import responsiveImage from "../assets/service-responsive-design.png";
import coloringImage from "../assets/service-coloring.png";
import contentImage from "../assets/service-content-creation.png";
import BgImage from "../components/BgImage";
import { Button } from "@material-tailwind/react";
interface ICard {
  image: string;
  title: string;
}
const Services: React.FC = () => {
  const services: ICard[] = [
    {
      image: designingImage,
      title: "Designing",
    },
    {
      image: codingImage,
      title: "Coding",
    },
    {
      image: hostingImage,
      title: "Hosting",
    },
    {
      image: softwareImage,
      title: "Software engineering",
    },
    {
      image: socialImage,
      title: "Social media",
    },
    {
      image: coloringImage,
      title: "Software engineering",
    },
    {
      image: contentImage,
      title: "Software engineering",
    },
    {
      image: responsiveImage,
      title: "Responsive design",
    },
  ];
  return (
    <>
      <BgImage />
      <div className="container pt-10 lg:pt-14">
        {/* Main Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center mb-10 bg-background-gradient rounded-2xl lg:rounded-3xl py-4 px-8 lg:py-4">
          {/* Text */}
          <div className="w-full">
            <h2 className="text-3xl text-center lg:text-start font-bold mb-2 text-white">
              Our Services
            </h2>
            <p className="text-muted leading-relaxed text-center lg:text-start">
              lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum
              lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor sit
              amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit
              amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit
              amet orm ipsuma dolo rlorem ipsum dolor sit amet orm ipsuma dolor
              amet sitorem ipsum
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center w-full">
            <img
              src={servicesImage}
              alt="ServiceImage"
              className="w-full h-full max-w-md"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row gap-2 bg-background-gradient p-4 rounded-2xl lg:rounded-2xl shadow-lg"
            >
              {/* Image */}
              <div className="w-full flex flex-col justify-center items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-72 h-52 object-contain"
                />
                <h3 className="text-xl text-white text-center font-medium">
                  {service.title}
                </h3>
              </div>
              {/* Text */}
              <div className="w-full flex flex-col justify-center lg:justify-end gap-y-4 text-center lg:text-start">
                <p className="text-muted">
                  lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum
                  lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor
                  sit amet orm ipsuma dolor amet sitorem ipsum
                </p>
                <Button className="capitalize w-fit mx-auto lg:mx-0 bg-btn-primary hover:bg-btn-primary-hover text-white font-normal text-lg rounded-xl px-3 py-2">
                  Service request
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
