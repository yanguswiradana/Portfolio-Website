export type Skill = {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
};

export type SkillGroup = {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'lucide:code-2',
    color: 'blue',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'PHP' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend',
    icon: 'lucide:layout-template',
    color: 'purple',
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
    icon: 'lucide:server',
    color: 'green',
    skills: [
      { name: 'Node.js' },
      { name: 'Laravel' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'AI & ML',
    icon: 'lucide:brain-circuit',
    color: 'pink',
    skills: [
      { name: 'Google Gemini' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'Tools & Ops',
    icon: 'lucide:wrench',
    color: 'orange',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'Figma' },
    ],
  },
];
