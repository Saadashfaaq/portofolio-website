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
  {
    id: '4',
    certificateImages: [
      'assets/images/certificate/python-certif/python-certif_page-0001.jpg',
      'assets/images/certificate/python-certif/python-certif_page-0002.jpg',
      'assets/images/certificate/python-certif/python-certif_page-0003.jpg',
    ],
    title: 'Python Programming',
    institution: 'IDCamp Academy & Dicoding',
    institutionLogo: 'assets/images/logo/dicoding.png',
    summary:
      'This course is designed for programmer who want to learn the fundamentals of Python programming according to industry standards. By the end of the class, students will be able to create programs using Python across various IDEs such as Visual Studio Code, Jupyter Notebook, and Google Colaboratory.',
    location: 'Online',
    startDate: 'December 2025',
    endDate: 'December 2025',
    syllabus: [
      'Getting Started with Python: Introduction to Python language, its evolution, versions, and writing your first code. (5h 30m)',
      'Interacting with Data: How to handle and operate different types of data using Python. (11h 30m)',
      'Expressions: Concepts of expressions and their implementation in Python. (3h 55m)',
      'Sequential Actions: Understanding sequential actions and applying them in Python. (2h 10m)',
      'Control Flow: Using branching and looping to control program flow and handle errors in Python. (6h 20m)',
      'Arrays and Processing: Understanding arrays and applying them in Python programming. (4h 15m)',
      'Matrices: Concepts of matrices and their implementation in Python. (2h 35m)',
      'Subprograms: Effective program design by breaking it into functions and procedures. (6h 5m)',
      'Object-Oriented Programming (OOP): Introduction to objects, classes, methods, attributes, and inheritance in Python. (Optional) (5h 25m)',
      'Python Style Guide: Understanding PEP8, code formatting, combined statements, and naming conventions. (3h 35m)',
      'Unit Testing: Techniques for automated program testing in Python with unit tests and examples. (1h 35m)',
      'Popular Python Libraries: Overview of popular libraries for text processing, mathematics, parsing, data manipulation, file management, web scraping, machine learning, and web development. (3h 20m)',
    ],
    technologies: [
      { name: 'Python', icon: 'assets/images/logo/python-480.png' },
      {
        name: 'Visual Studio Code',
        icon: 'assets/images/logo/visual-studio_906324 (2).png',
      },
    ],
    achievements: [
      'Developed functional Python programs across multiple IDEs.',
      'Gained proficiency in Python basics and control flow.',
      'Implemented arrays, matrices, and subprograms effectively.',
      'Learned and applied OOP principles in Python (optional module).',
      'Applied unit testing for automated program verification.',
    ],
  },
  {
    id: '5',
    certificateImages: [
      'assets/images/certificate/machine-learning-certif/machine-learning-certif-1.jpg',
      'assets/images/certificate/machine-learning-certif/machine-learning-certif-2.jpg',
      'assets/images/certificate/machine-learning-certif/machine-learning-certif-3.jpg',
    ],
    title: 'Artificial Intelligence',
    institution: 'IDCamp Academy & Dicoding',
    institutionLogo: 'assets/images/logo/dicoding.png',
    summary:
      'This course is designed programmer who want to start a career in Artificial Intelligence. After completing the class, students are expected to understand fundamental AI concepts and apply them effectively.',
    location: 'Online',
    startDate: 'December 2025',
    endDate: 'December 2025',
    syllabus: [
      'Introduction to Artificial Intelligence (AI): Understanding fundamental concepts of AI. (1h 30m)',
      'Data for AI: Basic concepts of data and its usage in AI development. (1h 25m)',
      'Introduction to Machine Learning: Core concepts of Machine Learning as part of AI with practical examples. (2h 30m)',
      'Deep Learning for Everyone: Key concepts in Deep Learning and practical implementation examples. (2h 25m)',
    ],
    technologies: [
      { name: 'Python', icon: 'assets/images/logo/python-480.png' },
      {
        name: 'Machine Learning',
        icon: 'assets/images/logo/brain_12219524.png',
      },
      { name: 'Deep Learning', icon: 'assets/images/logo/brain_12219524.png' },
    ],
    achievements: [
      'Understood fundamental AI concepts.',
      'Learned to work with data for AI applications.',
      'Applied basic Machine Learning techniques.',
      'Implemented practical Deep Learning examples.',
    ],
  },
  {
    id: '6',
    certificateImages: [
      'assets/images/certificate/ai-certi/ai-certif_page-0001.jpg',
      'assets/images/certificate/ai-certi/ai-certif_page-0002.jpg',
    ],
    title: 'Machine Learning Pipeline',
    institution: 'Dicoding Indonesia',
    institutionLogo: 'assets/images/logo/dicoding.png',
    summary:
      'A comprehensive machine learning certification focused on building end-to-end ML pipelines. The program covers data preprocessing, exploratory data analysis, unsupervised learning with clustering, supervised classification, model evaluation, and practical implementation using real-world datasets.',
    location: 'Indonesia',
    startDate: 'Nov 2025',
    endDate: 'Dec 2025',

    syllabus: [
      'Introduction to Machine Learning and workflow fundamentals',
      'Data collection, cleaning, and preprocessing techniques',
      'Exploratory Data Analysis (EDA) for numerical and categorical data',
      'Unsupervised learning using K-Means clustering',
      'Cluster evaluation with Elbow Method and Silhouette Score',
      'Dimensionality reduction using Principal Component Analysis (PCA)',
      'Supervised learning with Decision Tree and Random Forest',
      'Model evaluation using accuracy, precision, recall, and F1-score',
      'Hyperparameter tuning with GridSearchCV',
      'Exporting trained models and datasets for deployment',
    ],

    technologies: [
      { name: 'Python', icon: 'assets/images/logo/python-480.png' },
      { name: 'Scikit-learn', icon: 'assets/images/logo/Scikit-learn.png' },
      { name: 'Pandas', icon: 'assets/images/logo/pandas.png' },
      { name: 'NumPy', icon: 'assets/images/logo/NumPy.png' },
      { name: 'Matplotlib', icon: 'assets/images/logo/Matplotlib.png' },
      { name: 'Seaborn', icon: 'assets/images/logo/Seaborn.png' },
      {
        name: 'Jupyter Notebook',
        icon: 'assets/images/logo/Jupyter Notebook.png',
      },
    ],

    achievements: [
      'Completed an end-to-end machine learning project integrating clustering and classification',
      'Successfully implemented unsupervised learning to generate labels from unlabeled data',
      'Built and evaluated multiple classification models with hyperparameter tuning',
      'Produced reproducible notebooks and deployment-ready model artifacts',
    ],
  },
];
