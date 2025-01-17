import { IProject } from "../interfaces";

export const filterProjectsByCategory = ({
  projects,
  category,
}: {
  projects: IProject[];
  category: string;
}): IProject[] => {
  if (category === "all") return projects;

  return projects.filter((project) => project.category === category);
};
