import ProjectForm from "../../../components/dashboard/projects/ProjectForm";
import { CATEGORIES } from "../../../constant";

const EditProjectAdminDashboard = () => {
  const project = {
    id: "1",
    title: "عنوان المشروع",
    description: "وصف المشروع",
    tools: "react nextjs tailwindcss",
    url: "https://url.com",
    category: CATEGORIES[2].value,
    hidden: true,
    images: [],
  };
  return (
    <div className="my-9">
      <h2 className="text-3xl font-medium text-white">تعديل</h2>
      <ProjectForm action="update" project={project} />
    </div>
  );
};

export default EditProjectAdminDashboard;
