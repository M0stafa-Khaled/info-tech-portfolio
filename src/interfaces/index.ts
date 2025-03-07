// Auth Interfaces

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

export interface IRegisterResponse {
  message: string;
  data: IUser;
}
export interface ILoginResponse {
  message: string;
  token: string;
  data: IUser;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  email_verified_at: string;
  role: string;
  created_at: string;
}

export interface IEmployee {
  id: number;
  user_id: number;
  image: string;
  specialization: string;
  created_at: string;
  user: IUser;
}

export interface IEmployeeResponse {
  success: boolean;
  data: IEmployee[];
}

export interface IAddEmployee {
  user_id: string;
  image: File;
  specialization: string;
}

export interface IAddEmployeeResponse {
  success: boolean;
  data: IEmployee;
  message: string;
}

export interface IService {
  title: string;
  description: string;
  img: string;
}

export interface IProjectsResponse {
  message: string;
  data: IProject[];
}

export interface IProject {
  id: number;
  title: string;
  descriptions: string;
  url: string;
  tool: string;
  hidden: 0 | 1;
  category_id: number;
  images: IImage[];
  category: ICategory;
}

export interface IImage {
  id: number;
  image: string;
  project_id: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IAddProject {
  title: string;
  descriptions: string;
  url: string;
  category_id: string;
  tool: string;
  hidden: boolean;
  image: File[];
}

export interface ICategoriesResponse {
  message: string;
  data: ICategory[];
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

export interface IFormInput {
  name: string;
  type: string;
  label: string;
}

export interface IMessage {
  id: number;
  firstname: string;
  lastname: string;
  mobile: string;
  address: string;
  email: string;
  title: string;
  message: string;
  created_at: string;
}

export interface IResponseMessages {
  status: string;
  messages: IMessage[];
}

export interface IAddMessage {
  firstname: string;
  lastname: string;
  mobile: string;
  address: string;
  email: string;
  title: string;
  message: string;
}

export interface ISettings {
  id?: number;
  name: null | string;
  logo: null | string;
  email: null | string;
  phone: null | string;
  address: null | string;
  facebook: null | string;
  twitter: null | string;
  instagram: null | string;
  youtube: null | string;
  tiktok: null | string;
}
