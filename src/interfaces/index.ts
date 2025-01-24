// * Write all interfaces types and export it from here

export interface IService {
  title: string;
  description: string;
  img: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  category: string;
}
export interface IOpinion {
  img: string;
  rating: number;
  description: string;
  name: string;
  job: string;
}

export interface INavLinkDashboard {
  name: string;
  path: string;
}
export interface ILoginFormInput {
  name: "email" | "password";
  type: string;
  label: string;
}

export interface IAddProjectFormInput {
  name: string;
  type: string;
  label: string;
}
