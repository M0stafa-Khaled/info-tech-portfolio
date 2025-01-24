import ProjectForm from "../../../components/dashboard/projects/ProjectForm";

const AddProjectAdminDashboard = () => {
  return (
    <div className="my-9">
      <h2 className="text-3xl font-medium text-white">اضافة مشروع</h2>
      <ProjectForm action="create" />
    </div>
  );
};

export default AddProjectAdminDashboard;
