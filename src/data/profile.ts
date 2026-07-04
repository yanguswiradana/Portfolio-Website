export const profile = {
  name: 'I Wayan Agus Wiradana',
  role: 'Web Developer',
  tagline: 'To Be and To Give.',
  location: 'Denpasar, Bali, Indonesia',
  focus: 'Full-stack web developer',
  currently: 'Learning AI & building side projects',
  bio: 'I am a Web Developer with a deep passion for Artificial Intelligence. I love building beautiful, functional websites and actively exploring how to develop and integrate AI-driven solutions to create innovative digital experiences.',
  avatarUrl: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
  email: 'yanguswiradana@gmail.com',
  socials: {
    github: 'https://github.com/yanguswiradana',
    linkedin: 'https://www.linkedin.com/in/i-wayan-agus-wiradana-037a4532b',
    twitter: 'https://x.com/arcxcode',
    website: 'https://example.com',
  },
  seo: {
    title: 'Wiradana — Web Developer',
    description:
      'I am a Web Developer with a deep passion for Artificial Intelligence. I love building beautiful, functional websites and actively exploring how to develop and integrate AI-driven solutions.',
  },
} as const;

export type Profile = typeof profile;
