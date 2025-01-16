import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import { IProject } from "../interfaces";

const ProjectCard = ({
  project: { id, title, description, img, url },
}: {
  project: IProject;
}) => {
  return (
    <div className="bg-background-gradient p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="bg-[#000F22]/40 rounded-2xl lg:rounded-3xl overflow-hidden pt-2 shadow-md">
          <div className="h-56 sm:h-64 md:h-72 flex justify-center items-center">
            <img
              src={img}
              alt={title}
              className="w-full md:max-w-md h-full object-cover rounded-t-2xl lg:rounded-t-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
          <h3 className="text-center lg:text-start text-xl lg:text-2xl capitalize text-white font-medium">
            {title}
          </h3>
          <p className="text-center lg:text-start text-sm lg:text-lg text-muted max-w-md">
            {description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:justify-center md:gap-x-4 gap-y-2 lg:justify-between items-center">
          <Link
            to={`/projects/${id}`}
            className="flex items-center gap-x-3 px-2 text-lg text-blue"
          >
            More details
            <CgArrowTopRightO className="h-5 w-5" size={20} />
          </Link>
          <Link
            to={url}
            target="_blank"
            className="flex items-center gap-x-3 px-2 text-lg text-yellow"
          >
            Live preview
            <CgArrowTopRightO className="h-5 w-5" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
