import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import { IProject } from "../../interfaces";
import Button from "../ui/Button";

const ProjectCard = ({
  project: { id, title, description, images, url },
}: {
  project: IProject;
}) => {
  return (
    <div className="bg-background-gradient flex p-3 lg:p-4 rounded-2xl lg:rounded-3xl shadow-sm border border-dark-blue group">
      <div className="flex flex-col justify-between gap-3 w-full">
        <div className="bg-[#000F22]/40 rounded-2xl lg:rounded-3xl overflow-hidden pt-2 shadow-md">
          <div className="h-56 sm:h-64 md:h-72 flex justify-center items-center ">
            <img
              loading="lazy"
              src={images[0]}
              alt={title}
              className="w-full md:max-w-md h-full object-cover rounded-t-2xl lg:rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
          <h3 className="text-center lg:text-start text-lg text-white font-medium line-clamp-1">
            {title}
          </h3>
          <p className="text-center lg:text-start text-sm lg:text-base leading-relaxed text-muted max-w-md line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:justify-center sm:gap-x-4 gap-y-2 lg:justify-between items-center">
          <Button className="bg-btn-primary hover:bg-btn-primary-hover rounded-lg w-full sm:w-fit">
            <Link
              to={`/projects/${id}`}
              className="flex items-center justify-center sm:justify-start gap-x-3 text-white py-2 px-4  md:text-start"
            >
              تفاصيل أكثر
              <CgArrowTopRightO className="h-5 w-5" size={20} />
            </Link>
          </Button>
          <Button className="bg-success-700 hover:bg-success-800 rounded-lg w-full sm:w-fit">
            <Link
              to={url}
              target="_blank"
              className="flex items-center justify-center sm:justify-start gap-x-3 text-white py-2 px-4  md:text-start"
            >
              معاينة
              <CgArrowTopRightO className="h-5 w-5" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
