import { useEffect, useMemo, useRef, useState } from "react";
import { IProject } from "../../interfaces";
import BgImage from "../../components/BgImage";
import ProjectCard from "../../components/projects/ProjectCard";
import { motion } from "framer-motion";
import { cardVariants } from "../../animations";
import filterProjects from "../../utils/filterProjects";
import { useGetAllCategories } from "../../lib/react-query/categories";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGetAllPublicProjects } from "../../lib/react-query/projects";
import ProjectCardSkeleton from "../../components/ui/ProjectCardSkeleton";
import CategoriesSkeleton from "../../components/ui/CategoriesSkeleton";
import { toast } from "react-toastify";

const Projects = () => {
  const projectsRef = useRef(null);
  const { data: categories, isLoading: isLoadingCategories } =
    useGetAllCategories();
  const {
    data: projects,
    isLoading: isLoadingProjects,
    error,
  } = useGetAllPublicProjects();

  const [filter, setFilter] = useState<string>("الكل");
  const filteredProjects = useMemo(() => {
    return filterProjects({
      projects: projects?.data,
      filter: filter,
      typeOfFilter: "category",
    });
  }, [filter, projects]);

  useEffect(() => {
    if (error) toast.error("لقد حدث خطأ ما حاول لاحقا");
  }, [error]);

  if (isLoadingProjects)
    return (
      <div className="container">
        <CategoriesSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-y-9 gap-x-6">
          {Array.from({ length: 5 }, (_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );

  return (
    <>
      <BgImage />
      <div className="container">
        {/* Categories */}
        <div className="flex justify-center items-center mt-9 lg:mt-[72px] mb-9">
          <div className="bg-background-gradient flex justify-center flex-wrap gap-4 rounded-2xl px-4 py-2">
            {isLoadingCategories ? (
              <div className="flex justify-center items-center">
                <AiOutlineLoading3Quarters
                  className="animate-spin text-white"
                  size={24}
                />
              </div>
            ) : (
              <>
                <span
                  className={`text-white text-center font-medium lg:text-lg capitalize p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                    filter === "الكل" ? "bg-dark" : "bg-dark-blue"
                  }`}
                  onClick={() => {
                    setFilter("الكل");
                  }}
                >
                  الكل
                </span>
                {categories?.data?.map((category) => (
                  <span
                    key={category.name}
                    className={`text-white text-center font-medium lg:text-lg capitalize p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                      filter === category.name ? "bg-dark" : "bg-dark-blue"
                    }`}
                    onClick={() => {
                      setFilter(category.name);
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Projects */}
        {filteredProjects?.length ? (
          <motion.div
            ref={projectsRef}
            initial="visible"
            animate={"visible"}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-y-9 gap-x-6"
          >
            {filteredProjects?.map((project: IProject, index: number) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate={"visible"}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div>
            <p className="text-white text-2xl text-center">
              لا يوجد مشاريع بهذا القسم
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
