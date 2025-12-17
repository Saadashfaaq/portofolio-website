export interface Experience {
  id: string;
  company: string;
  companyLogo: string;
  experienceImages: string[];
  summary: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: {
    name: string;
    icon: string;
  }[];
  achievements: string[];
}
