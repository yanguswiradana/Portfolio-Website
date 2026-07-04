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
    title: 'BaliWasteAI',
    description:
      "BaliWasteAI is an intelligent, bilingual mobile-first web application designed to help citizens and businesses in Bali manage their waste disposal efficiently. By providing real-time capacity data of local landfills (TPS) and integrating Google's Gemini 3.5 Flash AI for instant waste classification, the app reduces the chance of rejected waste and overflowing bins.",
    image: '/images/projects/BaliWasteAI.png',
    tags: ['Nextjs', 'Typescript', 'Tailwind', 'Google Gemini 3.5 Flash AI', 'Google Maps Platform'],
    liveUrl: 'https://bali-waste-ai.vercel.app/',
    githubUrl: 'https://github.com/yanguswiradana/BaliWasteAI.git',
    featured: true,
  },
  {
    title: 'ReduktorDev',
    description:
      'ReduktorDev is a company that specializes in providing web development services to businesses. We build custom websites and web applications that are tailored to the specific needs of our clients. We also provide a range of other web development services, including website maintenance, website redesign, and website optimization.',
    image: '/images/projects/rdk-dev.png',
    tags: ['Next.js', 'React', 'Typescript', 'Tailwind'],
    liveUrl: 'https://rdk-dev.vercel.app/',
    githubUrl: 'https://github.com/yanguswiradana/rdk-dev.git',
    featured: true,
  },
  {
    title: 'RecodeID',
    description:
      'RecodeID is a web-based online course/class provider that focuses on learning logic using Python.',
    image: '/images/projects/recodeid.png',
    tags: ['React', 'Typescript', 'Tailwind',],
    liveUrl: 'https://recode-id.vercel.app/',
    githubUrl: 'https://github.com/yanguswiradana/RecodeID.git',
    featured: true,
  },
];
