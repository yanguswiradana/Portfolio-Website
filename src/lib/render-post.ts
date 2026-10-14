import { z } from 'zod';

const DocNodeSchema: z.ZodType<unknown> = z.lazy(() =>
  z.looseObject({
    text: z.unknown().optional(),
    bold: z.unknown().optional(),
    italic: z.unknown().optional(),
    underline: z.unknown().optional(),
    code: z.unknown().optional(),
    strikethrough: z.unknown().optional(),
    type: z.string().optional(),
    level: z.number().optional(),
    href: z.string().optional(),
    src: z.string().optional(),
    alt: z.string().optional(),
    children: z.array(z.lazy(() => DocNodeSchema)).optional(),
  })
);

type DocNode = {
  text?: unknown;
  bold?: unknown;
  italic?: unknown;
  underline?: unknown;
  code?: unknown;
  strikethrough?: unknown;
  type?: string;
  level?: number;
  href?: string;
  src?: string;
  alt?: string;
  children?: DocNode[];
};

function parseNode(input: unknown): DocNode | null {
  const parsed = DocNodeSchema.safeParse(input);
  if (!parsed.success) return null;
  return parsed.data as DocNode;
}

export function renderPostNode(input: unknown): string {
  const node = parseNode(input);
  if (!node) return '';

  if (node.text !== undefined) {
    let text = String(node.text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    if (node.bold === true) text = `<strong>${text}</strong>`;
    if (node.italic === true) text = `<em>${text}</em>`;
    if (node.underline === true) text = `<u>${text}</u>`;
    if (node.code === true) text = `<code>${text}</code>`;
    if (node.strikethrough === true) text = `<s>${text}</s>`;
    return text;
  }

  const children = (node.children ?? []).map(renderPostNode).join('');

  switch (node.type ?? '') {
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'heading': {
      const level = Math.min(Math.max(node.level ?? 2, 2), 4);
      return `<h${level}>${children}</h${level}>`;
    }
    case 'unordered-list':
      return `<ul>${children}</ul>`;
    case 'ordered-list':
      return `<ol>${children}</ol>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'list-item-content':
      return children;
    case 'blockquote':
      return `<blockquote>${children}</blockquote>`;
    case 'code':
      return `<pre><code>${children}</code></pre>`;
    case 'divider':
      return `<hr />`;
    case 'link':
      return `<a href="${node.href ?? '#'}" target="_blank" rel="noopener noreferrer">${children}</a>`;
    case 'image':
      return `<img src="${node.src ?? ''}" alt="${node.alt ?? ''}" loading="lazy" />`;
    default:
      return children;
  }
}

export function renderPostContent(content: unknown): string {
  if (!Array.isArray(content)) return '';
  return content.map(renderPostNode).join('');
}
