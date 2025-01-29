import { IProject } from "../interfaces";

const filterProjects = ({
  projects,
  filter,
  typeOfFilter,
}: {
  projects: IProject[];
  filter: string;
  typeOfFilter: "hiddenProjects" | "category";
}) => {
  // Filter by category
  if (typeOfFilter === "category") {
    if (filter === "الكل") return projects;
    return projects.filter((project) => project.category.trim() === filter);
  }
  // Filter hidden projects
  else {
    if (filter === "projects") return projects;
    else if (filter === "projects_hidden")
      return projects.filter((project) => project.hidden);
    else return projects.filter((project) => !project.hidden);
  }
};

export default filterProjects;
