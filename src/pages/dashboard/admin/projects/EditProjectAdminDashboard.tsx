import { useParams } from "react-router-dom";
import ProjectForm from "../../../../components/dashboard/projects/ProjectForm";
import { useGetProjectById } from "../../../../lib/react-query/projects";
import Loader from "../../../../components/Loader";
import updateProjectSchema from "../../../../validations/updateProjectSchema";

const EditProjectAdminDashboard = () => {
  const { id } = useParams();
  const { data: project, isLoading } = useGetProjectById(id!);

  if (isLoading)
    return (
      <div className="my-9">
        <Loader />
      </div>
    );

  return (
    <div className="my-6">
      <h2 className="text-3xl font-medium text-white">تعديل</h2>
      <ProjectForm
        action="update"
        project={project?.data}
        projectSchema={updateProjectSchema}
      />
    </div>
  );
};

export default EditProjectAdminDashboard;
