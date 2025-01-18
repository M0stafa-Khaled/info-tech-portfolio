import SectionTitle from "./SectionTitle";
import aboutImage from "../../assets/home-about.json";
import { CgArrowTopRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from "./Button";
import Lottie from "lottie-react";
const AboutUs = () => {
  return (
    <section className="container">
      <SectionTitle title="About Us" />
      <div className="bg-background-gradient py-7 lg:py-14 px-6 lg:px-24 rounded-2xl lg:rounded-[36px]">
        <div className="flex flex-col justify-center items-center gap-y-4 lg:gap-y-9">
          <div className="flex flex-col-reverse xl:flex-row gap-x-9 gap-y-6">
            {/* Text */}
            <div className="w-full flex flex-col gap-y-2 lg:gap-y-4">
              <h2 className="text-white capitalize text-2xl lg:text-[42px]">
                info tech
              </h2>
              <p className="text-muted text-sm lg:text-lg">
                lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum
                lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor
                sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor
                sit amet orm ipsuma dolor lorem ipsum dolor sit amet orm ipsuma
                dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma
                dolor lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem
                ipsum lorem ipsum dolor sit amet orm ipsuma dolorlorem ipsum
                dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum
                dolor sit amet orm ipsuma dolor
              </p>
            </div>
            {/* Line */}
            <div className="flex justify-center items-center">
              <hr className="h-[1px] w-2/3 xl:h-2/3  xl:w-[1px] bg-muted rounded-2xl" />
            </div>
            {/* Image */}
            <div className="w-full flex justify-center items-center">
              <Lottie
                animationData={aboutImage}
                loop={true}
                className="w-full max-w-sm lg:max-w-md"
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col lg:flex-row justify-between gap-y-4 gap-x-[72px] max-w-xs lg:max-w-full">
            <Button>
              <Link
                to={"/about"}
                className="px-3 sm:px-6 py-4 flex justify-center items-center gap-x-3 text-white text-sm xl:text-lg font-medium normal-case"
              >
                More details about the team{" "}
                <span>
                  <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
                </span>
              </Link>
            </Button>
            <Button primary>
              <Link
                to={"/contact"}
                className="px-3 sm:px-6 py-4 flex justify-center items-center gap-x-3 text-white text-sm xl:text-lg font-medium normal-case"
              >
                Contact us{" "}
                <span>
                  <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
