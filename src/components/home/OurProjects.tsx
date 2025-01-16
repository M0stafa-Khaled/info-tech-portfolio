import { IProject } from "../../interfaces";
import SectionTitle from "./SectionTitle";
import projectImg from "../../assets/project-img.png";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";

const OurProjects = () => {
  const projects: IProject[] = [
    {
      id: 1,
      title: "solar panelts system planets  web",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      img: projectImg,
      link: "",
      category: "frontend",
    },
    {
      id: 2,
      title: "solar panelts system planets  web",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      img: projectImg,
      link: "",
      category: "frontend",
    },
    {
      id: 3,
      title: "solar panelts system planets  web",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      img: projectImg,
      link: "",
      category: "ui/ux",
    },
    {
      id: 4,
      title: "solar panelts system planets  web",
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      img: projectImg,
      link: "",
      category: "ui/ux",
    },
  ];
  return (
    <section className="container">
      <SectionTitle title="Our Projects" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-9 lg:gap-x-11 xl:gap-x-[72px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-[18px] lg:mt-[36px]">
        <Button className="lg:w-fit">
          <Link
            to={"/projects"}
            className="px-8 sm:px-24 h-[56px] flex justify-center items-center gap-x-3 text-white text-lg font-medium normal-case"
          >
            Show more
            <span>
              <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default OurProjects;
