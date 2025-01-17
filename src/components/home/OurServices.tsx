import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import serviceCoding from "../../assets/service-coding.png";
import serviceDesign from "../../assets/service-designing.png";
import serviceSoftware from "../../assets/service-software-engineering.png";
import serviceHosting from "../../assets/service-hosting.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import { IService } from "../../interfaces";

const OurServices = () => {
  const services: IService[] = [
    {
      title: "Web Development",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum",
      img: serviceCoding,
    },
    {
      title: "Designing",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum",
      img: serviceDesign,
    },
    {
      title: "software engineering",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum",
      img: serviceSoftware,
    },
    {
      title: "Hosting",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolo rlorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum",
      img: serviceHosting,
    },
  ];
  return (
    <section className="container">
      <SectionTitle title="Our Services" />
      {/* Services Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
      <div className="flex justify-center mt-[18px] lg:mt-[36px]">
        <Button className="lg:w-fit">
          <Link
            to={"/services"}
            className="px-8 sm:px-24 h-[56px] flex justify-center items-center gap-x-3 text-white text-lg font-medium normal-case"
          >
            Show more
            <span>
              <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default OurServices;
