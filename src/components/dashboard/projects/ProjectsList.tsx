import { IProject } from "../../../interfaces";
import ProjectCard from "./ProjectCard";

interface IProps {
  projects: IProject[];
}
const ProjectsList = ({ projects }: IProps) => {
  return (
    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {/* Projects Cards */}
      {projects.map((project: IProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
