export const NAV_LINKS = [
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
