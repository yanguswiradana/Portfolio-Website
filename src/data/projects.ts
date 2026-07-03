export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves. Keep it to one or two sentences.',
    image: '/images/projects/p1.png',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourhandle/project-one',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'A short description of what this project does and why it matters. Focus on the outcome, not the tech.',
    image: '/images/projects/p2.png',
    tags: ['Next.js', 'React', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourhandle/project-two',
    featured: true,
  },
  {
    title: 'Project Three',
    description:
      'A short description of what this project does and the value it delivers. Mention scale or impact if relevant.',
    image: '/images/projects/p3.png',
    tags: ['React', 'TypeScript', 'tRPC'],
    liveUrl: 'https://example.com',
    featured: false,
  },
];
