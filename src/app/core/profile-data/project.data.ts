import { Project } from '../models/project.model';

export const PROJECT: Project[] = [
  {
    id: '1',

    name: 'Personal Portfolio Website',
    logo: 'assets/images/logo/letter-r_9526049.png',
    images: [
      'assets/images/work-experience/personal-portofolio-website/home-light.png',
      'assets/images/work-experience/personal-portofolio-website/home-dark.png',
      'assets/images/work-experience/personal-portofolio-website/career-light.png',
      'assets/images/work-experience/personal-portofolio-website/career-dark.png',
      'assets/images/work-experience/personal-portofolio-website/details-light.png',
      'assets/images/work-experience/personal-portofolio-website/details-dark.png',
    ],
    type: 'Web Application',
    role: 'Frontend Developer',

    summary:
      'A modern, responsive personal portfolio website built to showcase my professional experience, projects, and certifications. Designed with a strong focus on clean UI, smooth interactions, and mobile-first user experience.',

    period: '2024-12',

    technologies: [
      {
        name: 'Angular',
        icon: 'assets/images/logo/angularjs-480.png',
      },
      {
        name: 'TypeScript',
        icon: 'assets/images/logo/typescript_5968381.png',
      },
      {
        name: 'Tailwind CSS',
        icon: 'assets/images/logo/tailwind-css-480.png',
      },
    ],

    features: [
      'Responsive layout optimized for mobile, tablet, and desktop',
      'Dynamic portfolio sections with tab-based navigation',
      'Detailed project and certification pages with image slider',
      'Modern UI with dark mode support',
      'Reusable and scalable component architecture',
      'Clean data-driven structure for easy content management',
    ],

    links: {
      live: 'https://portofolio-website-lmgk.vercel.app/',
      github: 'https://github.com/Saadashfaaq/portofolio-website',
    },
  },
  {
    id: '2',
    name: 'Bank Transaction Clustering & Classification',
    logo: 'assets/images/logo/brain_12219524.png',
    images: [
      'assets/images/machine-learning-project-1/machine-learning-1.png',
      'assets/images/machine-learning-project-1/machine-learning-2.png',
    ],
    type: 'Machine Learning Project',
    role: 'Machine Learning Engineer',
    summary:
      'An end-to-end machine learning project that integrates unsupervised and supervised learning techniques. The project applies K-Means clustering to unlabeled bank transaction data to generate customer segments, followed by supervised classification models to predict cluster membership. The workflow covers data preprocessing, exploratory data analysis, model training, evaluation, and deployment-ready artifacts.',
    period: 'Dec 2025',

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

    features: [
      'Performed exploratory data analysis (EDA) with numerical and categorical visualizations',
      'Applied data cleaning, feature encoding, scaling, and outlier handling',
      'Implemented K-Means clustering with Elbow Method and Silhouette Score evaluation',
      'Used PCA for cluster visualization and dimensionality reduction',
      'Generated cluster labels to create a supervised learning dataset',
      'Built and evaluated Decision Tree and Random Forest classifiers',
      'Applied hyperparameter tuning using GridSearchCV',
      'Exported trained models and processed datasets for reuse and deployment',
    ],

    links: {
      github:
        'https://github.com/Saadashfaaq/dicoding-machine-learning-project',
      live: 'https://github.com/Saadashfaaq/dicoding-machine-learning-project',
    },
  },
];
