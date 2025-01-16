import { AiFillStar } from "react-icons/ai";
import { IOpinion } from "../../interfaces";

interface IProps {
  opinion: IOpinion;
}

const OpinionCard = ({
  opinion: { img, name, job, description, rating },
}: IProps) => {
  return (
    <div className="bg-background-gradient flex flex-col lg:flex-row gap-x-2 gap-y-4 px-4 py-9 2xl:py-12 rounded-2xl lg:rounded-3xl shadow-lg">
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={img}
          alt={name}
          className="2xl:max-w-40  max-w-36 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        {/* Rating */}
        <div className="flex justify-center lg:justify-start gap-x-2">
          {Array.from({ length: rating }).map((_, idx) => (
            <AiFillStar
              key={idx}
              className="h-6 lg:h-10 w-6 lg:w-10 text-yellow"
            />
          ))}
        </div>
        <p className="text-center lg:text-start text-muted text-xl">
          {description}
        </p>
        <h3 className="text-center lg:text-start text-white text-2xl font-medium">
          {name}
        </h3>
        <h5 className="text-center lg:text-start text-muted">{job}</h5>
      </div>
    </div>
  );
};

export default OpinionCard;
