import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import { PROJECTS } from "../../../../constant";
import ProjectsList from "../../../../components/dashboard/projects/ProjectsList";
import SelectMenu from "../../../../components/ui/SelectMenu";
import { useMemo, useState } from "react";
import filterProjects from "../../../../utils/filterProjects";

const ProjectsAdminDashboard = () => {
  const OPTIONS = [
    { label: "كل المشاريع", value: "projects" },
    { label: "المشاريع المخفية فقط", value: "projects_hidden" },
    { label: "المشاريع المتاحة فقط", value: "projects_nothidden" },
  ];

  const [selected, setSelected] = useState("projects");
  const filteredProjects = useMemo(() => {
    return filterProjects({
      projects: PROJECTS,
      filter: selected,
      typeOfFilter: "hiddenProjects",
    });
  }, [selected]);

  return (
    <div className="my-9">
      <div className="flex flex-col sm:flex-row gap-y-6">
        <h2 className="flex-1 text-3xl font-medium text-white">
          إدارة المشاريع
        </h2>
        <div className="sm:w-52 md:w-96">
          <SelectMenu
            options={OPTIONS}
            selected={selected}
            setSelected={setSelected}
            className="rounded-full py-4"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Button className="border-2 border-btn-primary hover:bg-btn-primary hover:text-white text-btn-primary rounded-full">
          <Link
            to={"/dashboard/admin/categories"}
            className="flex justify-center items-center w-full py-3 px-6"
          >
            ادارة الاقسام
          </Link>
        </Button>
        <Button className="border-2 border-transparent bg-btn-primary text-white hover:border-btn-primary hover:bg-transparent hover:text-btn-primary rounded-full">
          <Link
            to={"add"}
            className="flex justify-center items-center w-full py-3 px-6"
          >
            إضافة مشروع
          </Link>
        </Button>
      </div>
      <ProjectsList projects={filteredProjects} />
    </div>
  );
};

export default ProjectsAdminDashboard;
