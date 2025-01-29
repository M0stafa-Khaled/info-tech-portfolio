import { useMemo, useRef, useState } from "react";
import { IProject } from "../../interfaces";
import BgImage from "../../components/BgImage";
import ProjectCard from "../../components/projects/ProjectCard";
import { motion, useInView } from "framer-motion";
import { CATEGORIES, PROJECTS } from "../../constant";
import { cardVariants } from "../../animations";
import filterProjects from "../../utils/filterProjects";

const Projects = () => {
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, {
    once: true,
    amount: 0.2,
    margin: "350px 0px 600px 0px",
  });

  const [filter, setFilter] = useState<string>("الكل");

  const filteredProjects = useMemo(() => {
    return filterProjects({
      projects: PROJECTS,
      filter: filter,
      typeOfFilter: "category",
    });
  }, [filter]);

  return (
    <>
      <BgImage />
      <div className="container">
        {/* Categories */}
        <div className="flex justify-center items-center mt-9 lg:mt-[72px] mb-9">
          <div className="bg-background-gradient flex justify-center flex-wrap gap-4 rounded-2xl px-4 py-2">
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
            {CATEGORIES.map((category) => (
              <span
                key={category.label}
                className={`text-white text-center font-medium lg:text-lg capitalize p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                  filter === category.label ? "bg-dark" : "bg-dark-blue"
                }`}
                onClick={() => {
                  setFilter(category.label);
                }}
              >
                {category.label}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        {filteredProjects.length ? (
          <motion.div
            ref={projectsRef}
            initial="visible"
            animate={isProjectsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-y-9 gap-x-6"
          >
            {filteredProjects.map((project: IProject, index: number) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate={"visible"}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "tween", stiffness: 300 }}
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
