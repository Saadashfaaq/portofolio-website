import { Experience } from '../models/experiences.model';

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Zettabyte',
    companyLogo: 'assets/images/logo/zetta.webp',
    experienceImages: [
      'assets/images/work-experience/zet-project/zetta-1.png',
      'assets/images/work-experience/zet-project/zetta-2.png',
    ],
    summary:
      'Developed and enhanced features for an education platform in France that supports the full academic lifecycle of university students. The platform covers end-to-end student journeys, including enrollment, learning activities, remedial exams, tuition payments, internships, graduation, and career preparation.',

    location: 'Yogyakarta',
    position: 'Frontend Developer',
    startDate: 'November 2023',
    endDate: 'November 2024',
    responsibilities: [
      'Collaborated with QA and designers to define UI concepts using Figma for upcoming features.',
      'Worked closely with backend developers to design efficient data flows and ensure seamless API integration.',
      'Planned development workflows by breaking down large features into smaller, manageable tasks with accurate time estimation.',
      'Developed user-facing features using Angular, TypeScript, Angular Material, and Tailwind CSS.',
      'Performed bug fixing and UI refinements to improve application stability and user experience.',
      'Implemented end-to-end automation tests using Cypress to reduce manual testing effort.',
      'Used Git for version control in a collaborative, multi-developer environment.',
    ],

    technologies: [
      {
        name: 'Angular',
        icon: 'assets/images/logo/angularjs-480.png',
      },
      {
        name: 'Typescript',
        icon: 'assets/images/logo/typescript_5968381.png',
      },
    ],
    achievements: [
      'Built a high-quality internship feature using clean code principles and best practices, which became a standard reference for ongoing and future development.',
      'Organized and led a mini seminar for developers and QA teams on understanding input–output flow in software development.',
      'Appointed as Project Leader for a four-month period, overseeing task distribution, progress tracking, and team coordination.',
    ],
  },
  {
    id: '2',
    company: 'PT Hasnur Riung',
    companyLogo: 'assets/images/logo/hasnur.webp',
    experienceImages: [
      'assets/images/work-experience/has-project/has-1.png',
      'assets/images/work-experience/has-project/has-2.png',
      'assets/images/work-experience/has-project/has-3.png',
      'assets/images/work-experience/has-project/has-4.png',
      'assets/images/work-experience/has-project/has-5.png',
      'assets/images/work-experience/has-project/has-6.png',
    ],
    summary:
      'Developed an internal HR web application for PT Hasnur Riung to streamline employee leave management and significantly reduce operational overhead. The system supports the complete leave workflow, from submission and supervisor approval to document generation and flight ticket requests.',
    location: 'Yogyakarta',
    position: 'Frontend Developer',
    startDate: 'November 2024',
    endDate: 'June 2025',
    responsibilities: [
      'Developed an internal HR web application using Angular and Tailwind CSS to streamline employee leave management.',
      'Implemented an end-to-end leave request workflow, from employee submission to supervisor approval and rejection.',
      'Built features for leave submission, approval routing, and automatic generation of leave permission documents.',
      'Integrated a flight ticket request module to support employee travel arrangements.',
      'Transformed manual HR processes into a responsive and user-friendly digital system, improving overall operational efficiency.',
    ],
    technologies: [
      {
        name: 'Angular',
        icon: 'assets/images/logo/angularjs-480.png',
      },
      {
        name: 'Typescript',
        icon: 'assets/images/logo/typescript_5968381.png',
      },
    ],
    achievements: [
      'Improved leave management system efficiency by 80%',
      'Integrated flight ticket request automation into HR workflow',
      'Reduced manual approval tasks using dynamic form validations',
    ],
  },
];
