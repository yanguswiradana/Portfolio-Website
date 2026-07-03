export interface SeoMeta {
  title: string;
  description: string;
  ogType: 'website' | 'article';
  ogImage?: string;
}

export function buildSeo(input: {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}): SeoMeta {
  return {
    title: input.title,
    description: input.description,
    ogType: input.ogType ?? 'website',
    ogImage: input.ogImage,
  };
}
