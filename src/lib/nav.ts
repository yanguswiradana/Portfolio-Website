import { translations } from './translations';

type NavKey = keyof (typeof translations)['en'];

type NavLinkItem = { href: string; key: NavKey };
type TerminalNavLinkItem = { href: string; key: NavKey; shortKey: NavKey };

export const NAV_LINKS: NavLinkItem[] = [
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#experience', key: 'experience' },
  { href: '#blog', key: 'blog' },
  { href: '#contact', key: 'contact' },
];

export const TERMINAL_NAV_LINKS: TerminalNavLinkItem[] = [
  { href: '#about', key: 'about', shortKey: 'navAbout' },
  { href: '#projects', key: 'projects', shortKey: 'navProjects' },
  { href: '#skills', key: 'stack', shortKey: 'navStack' },
  { href: '#experience', key: 'experience', shortKey: 'navExperience' },
  { href: '#blog', key: 'blog', shortKey: 'navBlog' },
  { href: '#certifications', key: 'certifications', shortKey: 'navCertifications' },
  { href: '#contact', key: 'contact', shortKey: 'navContact' },
];

export type NavLink = NavLinkItem;
