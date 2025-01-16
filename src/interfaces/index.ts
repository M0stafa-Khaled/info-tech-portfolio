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
