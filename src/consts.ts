export const FORMSPREE_ID: string = import.meta.env.PUBLIC_FORMSPREE_ID ?? '';

export const FORMSPREE_ENDPOINT: string = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : '#';

export const SITE_URL: string = '';

export const SITE_NAME: string = 'Portfolio';
