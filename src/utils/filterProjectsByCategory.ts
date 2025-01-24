import { IProject } from "../interfaces";

export const filterProjectsByCategory = ({
  projects,
  category,
}: {
  projects: IProject[];
  category: string;
}): IProject[] => {
  if (category === "الكل") return projects;

  return projects.filter((project) => project.category.toLowerCase().trim() === category);
};
