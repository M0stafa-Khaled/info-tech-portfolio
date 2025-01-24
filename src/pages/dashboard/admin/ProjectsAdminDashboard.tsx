import { Link } from "react-router-dom";
import ProjectCard from "../../../components/dashboard/projects/ProjectCard";
import Button from "../../../components/ui/Button";
import { PROJECTS } from "../../../constant";

const ProjectsAdminDashboard = () => {
  return (
    <div className="my-9">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-medium text-white">إدارة المشاريع</h2>
        <Button className="bg-btn-primary hover:bg-btn-primary-hover text-white rounded-full">
          <Link
            to={"add"}
            className="flex justify-center items-center w-full py-3 px-6"
          >
            إضافة مشروع
          </Link>
        </Button>
      </div>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {/* Projects Cards */}
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsAdminDashboard;
