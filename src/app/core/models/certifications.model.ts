export interface Certification {
  id: string;
  certificateImages: string[];
  title: string;
  institution: string;
  institutionLogo: string;
  summary: string;
  location: string;
  startDate: string;
  endDate: string;
  syllabus: string[];
  technologies: {
    name: string;
    icon: string;
  }[];
  achievements: string[];
}
