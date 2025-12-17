import { ProfileData } from '../models/profile.model';

export const PROFILE_DATA: ProfileData = {
  name: 'Reynaldy Septian',
  title: 'Frontend Developer',
  profilePicture: 'assets/images/profile-picture/profile1.JPG',
  summary:
    'Frontend Developer with hands-on experience building scalable and user-centric web applications using Angular, React, Vue, TypeScript, and Tailwind CSS. Passionate about clean architecture, thoughtful UI/UX, and maintainable code. Experienced in collaborating with cross-functional teams, translating business needs into reliable digital solutions, and improving development workflows through testing and best practices. Currently expanding expertise in Artificial Intelligence and Data Engineering to build smarter, more impactful products in the future.',
  address: 'Bandung, Indonesia',
  phone: '+62 857-2121-6242',
  email: 'reynaldysptian@gmail.com',
  contactCards: [
    {
      id: 'email',
      label: 'Email',
      value: 'reynaldysptian@gmail.com',
      subText: 'Best way to reach me',
      icon: 'mail',
      url: 'mailto:reynaldysptian@gmail.com',
      priority: 1,
      isPrimary: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/mochamad-reynaldy-septian-hadi-aa18b6171/',
      subText: 'Professional background',
      icon: 'code',
      url: 'https://www.linkedin.com/in/mochamad-reynaldy-septian-hadi-aa18b6171/',
      priority: 2,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/reynaldy',
      subText: 'Code & side projects',
      icon: 'code',
      url: 'https://github.com/Saadashfaaq',
      priority: 3,
    },
    {
      id: 'cv',
      label: 'Download CV',
      value: 'PDF Resume',
      subText: 'Updated resume',
      icon: 'description',
      url: '/assets/cv/reynaldy-cv.pdf',
      priority: 4,
    },
  ],
};
