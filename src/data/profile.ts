export const profile = {
  name: 'Your Name',
  role: 'Your Title',
  tagline: 'A short tagline that explains what you do.',
  location: 'City, Country',
  bio: 'A two-to-three sentence bio about who you are, what you do, and what you care about. Replace this with your real story.',
  avatarUrl: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
  email: 'hello@example.com',
  socials: {
    github: 'https://github.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourhandle',
    twitter: 'https://twitter.com/yourhandle',
    website: 'https://example.com',
  },
  seo: {
    title: 'Your Name — Your Title',
    description:
      'A 160-character meta description mentioning your craft and key technologies. Replace this with your real summary.',
  },
} as const;

export type Profile = typeof profile;
