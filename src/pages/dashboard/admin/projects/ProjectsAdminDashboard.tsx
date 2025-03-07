import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import ProjectsList from "../../../../components/dashboard/projects/ProjectsList";
import SelectMenu from "../../../../components/ui/SelectMenu";
import { useEffect, useMemo, useState } from "react";
import filterProjects from "../../../../utils/filterProjects";
import { useGetAllProjects } from "../../../../lib/react-query/projects";
import ProjectCardSkeleton from "../../../../components/ui/ProjectCardSkeleton";
import { toast } from "react-toastify";
import SessionService from "../../../../utils/SessionService";
import { PROJECTS_FILTER_OPTIONS } from "../../../../constant";

const ProjectsAdminDashboard = () => {
  const token = SessionService.getToken();

  const [selected, setSelected] = useState("projects");

  const { data: projects, isLoading, error } = useGetAllProjects(token!);

  useEffect(() => {
    if (error) toast.error("لقد حدث خطأ اثناء عرض المشاريع حاول لاحقا");
  }, [error]);

  const filteredProjects = useMemo(() => {
    return filterProjects({
      projects: projects?.data || [],
      filter: selected,
      typeOfFilter: "hiddenProjects",
    });
  }, [selected, projects?.data]);

  return (
    <div className="my-6">
      <div className="flex flex-col sm:flex-row gap-y-6">
        <h2 className="flex-1 text-3xl font-medium text-white">
          إدارة المشاريع
        </h2>
        <div className="sm:w-52 md:w-96">
          <SelectMenu
            options={PROJECTS_FILTER_OPTIONS}
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
      {isLoading ? (
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      ) : !projects?.data.length ? (
        <h2 className="text-white text-xl lg:text-2xl my-6">لا يوجد مشاريع</h2>
      ) : (
        <ProjectsList projects={filteredProjects!} />
      )}
    </div>
  );
};

export default ProjectsAdminDashboard;
