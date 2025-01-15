import servicesImage from "../assets/service.png";
import designingImage from "../assets/service-designing.png";
import codingImage from "../assets/service-coding.png";
import hostingImage from "../assets/service-hosting.png";
import softwareImage from "../assets/service-software-engineering.png";
import socialImage from "../assets/service-social-media.png";
import responsiveImage from "../assets/service-responsive-design.png";
import coloringImage from "../assets/service-coloring.png";
import contentImage from "../assets/service-content-creation.png";
import { useState } from "react";
import BgImage from "../components/BgImage";
interface ICard {
  image: string;
  title: string;
}
const Services: React.FC = () => {
  const [cards] = useState<ICard[]>([
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
  ]);
  return (
    <>
    <BgImage/>
      <div className="text-white py-10">
        <div className="container mx-auto px-4">
          {/* Main Section */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10 bg-background-gradient rounded-lg px-10">
            <div className="order-last md:order-first text-center md:text-left mb-3">
              <h2 className="text-3xl font-bold  mb-2">Our Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={servicesImage}
                alt="ServiceImage"
                style={{ width: "500px", height: "334px" }}
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid sm:grid-cols-2  md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div className="grid  grid-cols-1 lg:grid-cols-2 bg-background-gradient p-6 rounded-lg shadow-lg">
                <div className="card-image">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="mx-auto mb-4"
                    style={{ width: "223px", height: "211px" }}
                  />
                  <h3 className="text-xl text-center font-bold">
                    {card.title}
                  </h3>
                </div>
                <div className="card-body text-center lg:text-left">
                  <p className="text-gray-400 mt-2 xl:leading-loose">
                    lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem
                    ipsum lorem ipsum dolor sit amet orm ipsuma dolo rlorem
                    ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum
                  </p>
                  <button className="mt-4  bg-blue hover:bg-light-blue-900 text-white py-2 px-4 rounded-lg">
                    Service request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
