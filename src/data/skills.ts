export type Skill = {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Astro' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'REST APIs' },
      { name: 'tRPC' },
    ],
  },
  {
    category: 'Tools & Ops',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'Figma' },
      { name: 'Linear' },
    ],
  },
];
