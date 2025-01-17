import { useState, useMemo } from "react";
import BgImage from "../components/BgImage";
import ProjectCard from "../components/ProjectCard";
import { IProject } from "../interfaces";
import projectImg from "../assets/project-img.png";
import { filterProjectsByCategory } from "../utils/filterProjectsByCategory";

const Projects = () => {
  const categories = ["all", "frontend", "ui&ux", "software engineering"];
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    const projectsData: IProject[] = [
      {
        id: 1,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "frontend",
      },
      {
        id: 2,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "ui&ux",
      },
      {
        id: 3,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "software engineering",
      },
      {
        id: 4,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "frontend",
      },
      {
        id: 5,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "ui&ux",
      },
      {
        id: 6,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "software engineering",
      },
      {
        id: 7,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "frontend",
      },
      {
        id: 8,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "ui&ux",
      },
      {
        id: 9,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "frontend",
      },
      {
        id: 10,
        title: "solar panelts system planets  web",
        description:
          "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
        img: projectImg,
        url: "",
        category: "software engineering",
      },
    ];
    return filterProjectsByCategory({
      projects: projectsData,
      category: filter,
    });
  }, [filter]);

  return (
    <div>
      <BgImage />
      <div className="container">
        <div className="flex justify-center items-center mt-9 lg:mt-[72px] mb-9">
          <div className="bg-background-gradient flex justify-center flex-wrap gap-4 rounded-2xl px-4 py-2">
            {categories.map((category) => (
              <span
                key={category}
                className={`text-white text-center font-medium lg:text-lg capitalize p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                  filter === category ? "bg-dark" : "bg-dark-blue"
                }`}
                onClick={() => {
                  setFilter(category);
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-9 lg:gap-x-11 xl:gap-x-[72px]">
          {filteredProjects.map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
