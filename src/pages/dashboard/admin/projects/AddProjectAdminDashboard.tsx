import ProjectForm from "../../../../components/dashboard/projects/ProjectForm";
import addProjectSchema from "../../../../validations/addProjectSchema";

const AddProjectAdminDashboard = () => {
  return (
    <div className="my-6">
      <h2 className="text-3xl font-medium text-white">اضافة مشروع</h2>
      <ProjectForm action="create" projectSchema={addProjectSchema} />
    </div>
  );
};

export default AddProjectAdminDashboard;
