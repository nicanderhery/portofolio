interface Skill {
  name: string;
  iconUrl: string;
}

interface Category {
  name: string;
  skills: Skill[];
}

export const categories: Category[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C#',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'C++',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        name: 'Java',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'JavaScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Python',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'TypeScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'QT',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg',
      },
    ],
  },
  {
    name: 'Backend Frameworks',
    skills: [
      {
        name: '.NET',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      },
      {
        name: 'Express.js',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Firebase',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      {
        name: 'Node.js',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
    ],
  },
  {
    name: 'Frontend Frameworks',
    skills: [
      {
        name: 'React',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Vue.js',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MongoDB',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'PostgreSQL',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Docker',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Git',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      {
        name: 'Linux',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },
];
