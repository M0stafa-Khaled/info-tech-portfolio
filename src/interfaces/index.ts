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
  images: string[];
  url: string;
  category: string;
  hidden: boolean;
  technologies: string[];

  rating: number;
  // ! not use in real data
  developers: {
    name: string;
    avatar: string;
    job: string;
  }[];
}
export interface IOpinion {
  img: string;
  rating: number;
  description: string;
  name: string;
  job: string;
}

export interface ITeamMember {
  name: string;
  job: string;
  description: string;
  image: string;
  skills: string[];
  links: {
    icon: React.ReactNode;
    link: string;
  }[];
  cv: string;
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
