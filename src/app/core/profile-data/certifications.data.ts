import { Certification } from '../models/certifications.model';

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    certificateImages: ['assets/images/certificate/Certif (1)_page-0002.jpg'],
    title: 'Fullstack Web Developer',
    institution: 'Purwadhika',
    institutionLogo: 'assets/images/logo/purwadhika.jpg',
    summary:
      'Completed an intensive full-stack web development bootcamp at Purwadhika Digital Technology School, starting from fundamental web technologies and progressing into modern full-stack development. The program emphasized hands-on projects, real-world workflows, and collaborative development using the MERN stack.',

    location: 'Jakarta',
    startDate: '2022',
    endDate: '2023',
    syllabus: [
      'Fundamentals of web development using HTML, CSS, and JavaScript',
      'Introduction to Software Development Life Cycle (SDLC)',
      'Collaborative development and teamwork best practices',
      'Version control and collaboration using Git and GitHub',
      'Full-stack application development using the MERN stack (MongoDB, Express.js, React, Node.js)',
      'Intensive mentoring and guided learning over a 4–5 month period',
    ],

    achievements: [
      'Advanced to the second phase of the bootcamp, selected among the top 8 participants out of 24.',
      'Built a mini social media application inspired by early Twitter (circa 2013), focusing on core posting and interaction features.',
      'Collaborated in a team to develop an e-commerce warehouse management platform inspired by JD.id.',
    ],
    technologies: [
      {
        name: 'MongoDB',
        icon: 'assets/images/logo/mongodb-480.png',
      },
      {
        name: 'Express. js',
        icon: 'assets/images/logo/express-js-480.png',
      },
      {
        name: 'React',
        icon: 'assets/images/logo/react-js-480.png',
      },
      {
        name: 'Node. js',
        icon: 'assets/images/logo/nodejs.png',
      },
    ],
  },
  {
    id: '3',
    certificateImages: [
      'assets/images/certificate/certif AI/AI Ethics Certif_page-0001.jpg',
      'assets/images/certificate/certif AI/AI Intro Certif_page-0001.jpg',
      'assets/images/certificate/certif AI/Generate AI Intro Certif_page-0001.jpg',
    ],
    title: 'AI Engineer',
    institution: 'Dicoding & IBM',
    institutionLogo: 'assets/images/logo/ibm-480.png',
    summary:
      'Currently enrolled in a comprehensive Artificial Intelligence and Machine Learning program that covers the full lifecycle of data-driven systems, from data processing and visualization to applied machine learning and deep learning. This program focuses on building a strong foundation in AI concepts, ethical considerations, and practical implementation using Python.',
    location: 'Jakarta',
    startDate: '2025',
    endDate: 'Present',
    syllabus: [
      'Introduction to Artificial Intelligence and Generative AI',
      'AI ethics and responsible use of artificial intelligence',
      'Programming fundamentals using Python',
      'Fundamentals of data processing and data visualization',
      'Basic SQL for data analysis',
      'Data analysis using Python',
      'Introduction to machine learning concepts and workflows',
      'Applied machine learning for real-world use cases',
      'Fundamentals of deep learning',
      'Building end-to-end machine learning systems',
    ],
    technologies: [
      {
        name: 'Python',
        icon: 'assets/images/logo/python-480.png',
      },
      {
        name: 'SQL',
        icon: 'assets/images/logo/database_14955778.png',
      },
      {
        name: 'Generative AI',
        icon: 'assets/images/logo/1700403290chatgpt-png.png',
      },
    ],
    achievements: ['Currently in progress'],
  },
  {
    id: '2',
    certificateImages: ['assets/images/certificate/Certif (1)_page-0001.jpg'],
    title: 'Frontend Developer',
    institution: 'Zettacamp',
    institutionLogo: 'assets/images/logo/zetta.webp',
    summary:
      'An advanced Angular-focused frontend bootcamp designed to shape engineers with strong logical thinking, clean architecture mindset, and the ability to collaborate effectively in professional software development teams.',

    location: 'Yogyakarta',
    startDate: '2022',
    endDate: '2023',
    syllabus: [
      'Fundamentals of modern frontend architecture and best practices',
      'Designing user-friendly and visually comfortable interfaces (UI/UX principles)',
      'Logical problem-solving and sequential thinking for feature development',
      'Frontend and backend integration using RESTful APIs',
      'Feature testing and quality assurance practices',
      'Cross-functional collaboration between Frontend, Backend, and QA teams',
    ],

    achievements: [
      'Graduated as 2nd overall among 50 bootcamp participants and ranked 2nd among 10 frontend engineering candidates.',
      'Earned a special privilege to directly join the Quality Control team alongside full-time engineers to work on real production projects at Zettabyte.',
    ],
    technologies: [
      {
        name: 'Angular',
        icon: 'assets/images/logo/angularjs-480.png',
      },
      {
        name: 'Angular Material',
        icon: 'assets/images/logo/angularjs-480.png',
      },
      {
        name: 'Typescript',
        icon: 'assets/images/logo/typescript_5968381.png',
      },
      {
        name: 'Graphql',
        icon: 'assets/images/logo/graphql-480.png',
      },
      {
        name: 'Cypress',
        icon: 'assets/images/logo/Cypress_Logomark_Dark-Color.png',
      },
    ],
  },
];
