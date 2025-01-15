import { Link } from "react-router-dom";
import { IProject } from "../../interfaces";
import { CgArrowTopRightO } from "react-icons/cg";

const ProjectCard = ({
  project: { id, title, description, img, link },
}: {
  project: IProject;
}) => {
  return (
    <div className="bg-background-gradient p-4 lg:p-6 rounded-2xl lg:rounded-3xl">
      <div className="flex flex-col gap-2">
        <div className="bg-[#000F22]/40 pt-5 lg:pt-10 px-3 lg:px-6 rounded-2xl flex justify-center items-center">
          <img src={img} alt={title} className="w-full h-[300px]" />
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
            to={link}
            target="_blank"
            className="flex items-center gap-x-3 px-2 text-lg text-blue"
          >
            More details
            <CgArrowTopRightO className="h-5 w-5" size={20} />
          </Link>
          <Link
            to={`/projects/${id}`}
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
