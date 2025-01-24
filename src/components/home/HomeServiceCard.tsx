import { IService } from "../../interfaces";

const HomeServiceCard = ({ service }: { service: IService }) => {
  return (
    <div className="bg-background-gradient flex flex-col items-center justify-center py-10 px-4 lg:px-6 gap-2 rounded-2xl lg:rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          loading="lazy"
          src={service.img}
          alt={service.title}
          className="w-32 h-32"
        />
      </div>
      <h3 className="text-center text-xl lg:text-2xl uppercase text-white font-medium">
        {service.title}
      </h3>
      <p className="text-center text-sm lg:text-lg text-muted max-w-md">
        {service.description}
      </p>
    </div>
  );
};

export default HomeServiceCard;
