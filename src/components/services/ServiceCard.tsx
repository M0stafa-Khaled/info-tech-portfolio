import { Link } from "react-router-dom";
import { IService } from "../../interfaces";
import Button from "../ui/Button";

interface IProps {
  service: IService;
}

const ServiceCard = ({ service }: IProps) => {
  return (
    <>
      {/* Image */}
      <div className="w-full flex flex-col justify-center items-center">
        <img
          src={service.img}
          alt={service.title}
          className="w-72 h-52 object-contain"
        />
        <h3 className="text-xl text-white text-center font-medium">
          {service.title}
        </h3>
      </div>
      {/* Text */}
      <div className="w-full flex flex-col lg:justify-evenly gap-y-4 text-center lg:text-right rounded-">
        <p className="text-white/80 leading-relaxed">{service.description}</p>
        <Button
          primary
          className="w-fit mx-auto lg:mx-0 bg-btn-primary hover:bg-btn-primary-hover text-white font-normal text-lg  rounded-xl"
        >
          <Link to={"/contact"} className="flex px-3 py-2">
            طلب الخدمة
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ServiceCard;
