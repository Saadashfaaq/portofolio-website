export interface Project {
  id: string;
  name: string;
  logo: string;
  images: string[];
  type: string;
  role: string;
  summary: string;
  period: string;

  technologies: Technology[];
  features: string[];

  links?: {
    live?: string;
    github?: string;
  };
}

export interface Technology {
  name: string;
  icon: string;
}
