import { config, fields, singleton, collection } from '@keystatic/core';

const isProduction = process.env.NODE_ENV === 'production';

// Reuseable Schemas to keep code DRY
const profileSchema = {
  name: fields.text({ label: 'Nama Lengkap' }),
  role: fields.text({ label: 'Role / Pekerjaan' }),
  tagline: fields.text({ label: 'Tagline' }),
  location: fields.text({ label: 'Lokasi' }),
  focus: fields.text({ label: 'Focus Area' }),
  currently: fields.text({ label: 'Currently Learning' }),
  bio: fields.text({ label: 'Bio', multiline: true }),
  avatarUrl: fields.text({ label: 'Avatar URL' }),
  resumeUrl: fields.text({ label: 'Resume URL' }),
  email: fields.text({ label: 'Email' }),
  socials: fields.object({
    github: fields.text({ label: 'GitHub' }),
    linkedin: fields.text({ label: 'LinkedIn' }),
    twitter: fields.text({ label: 'X (Twitter)' }),
    instagram: fields.text({ label: 'Instagram' }),
    website: fields.text({ label: 'Website' }),
  }, {
    label: 'Social Media Links',
  }),
  seo: fields.object({
    title: fields.text({ label: 'SEO Title' }),
    description: fields.text({ label: 'SEO Description', multiline: true }),
  }, {
    label: 'SEO Metadata',
  }),
};

const skillsSchema = {
  skillGroups: fields.array(
    fields.object({
      category: fields.text({ label: 'Kategori' }),
      icon: fields.text({ label: 'Icon (e.g. lucide:code-2)' }),
      color: fields.select({
        label: 'Warna Tema',
        options: [
          { label: 'Blue', value: 'blue' },
          { label: 'Purple', value: 'purple' },
          { label: 'Green', value: 'green' },
          { label: 'Pink', value: 'pink' },
          { label: 'Orange', value: 'orange' },
        ],
        defaultValue: 'blue',
      }),
      skills: fields.array(
        fields.object({
          name: fields.text({ label: 'Nama Skill' }),
        }),
        {
          label: 'Daftar Skill',
          itemLabel: (item) => item.fields.name.value || 'Skill',
        }
      ),
    }),
    {
      label: 'Grup Skill',
      itemLabel: (item) => item.fields.category.value || 'Grup Skill',
    }
  ),
};

const projectsSchema = {
  projects: fields.array(
    fields.object({
      title: fields.text({ label: 'Judul Project' }),
      category: fields.select({
        label: 'Kategori',
        options: [
          { label: 'Frontend Web', value: 'frontend' },
          { label: 'UI/UX Design', value: 'ui-ux' },
          { label: 'Fullstack / AI App', value: 'fullstack' },
        ],
        defaultValue: 'frontend',
      }),
      description: fields.text({ label: 'Deskripsi', multiline: true }),
      image: fields.text({ label: 'Path Gambar' }),
      tags: fields.array(fields.text({ label: 'Tag / Tech' }), {
        label: 'Tech Stack',
        itemLabel: (item) => item.value,
      }),
      liveUrl: fields.text({ label: 'Live Link (Opsional)' }),
      githubUrl: fields.text({ label: 'GitHub Link (Opsional)' }),
      featured: fields.checkbox({ label: 'Featured Project', defaultValue: true }),
    }),
    {
      label: 'Daftar Project',
      itemLabel: (item) => item.fields.title.value || 'Project',
    }
  ),
};

const experienceSchema = {
  experience: fields.array(
    fields.object({
      company: fields.text({ label: 'Perusahaan' }),
      role: fields.text({ label: 'Jabatan / Role' }),
      location: fields.text({ label: 'Lokasi (Opsional)' }),
      startDate: fields.text({ label: 'Tanggal Mulai' }),
      endDate: fields.text({ label: 'Tanggal Selesai (Kosongkan jika masih aktif)' }),
      description: fields.text({ label: 'Deskripsi Pekerjaan', multiline: true }),
      highlights: fields.array(fields.text({ label: 'Highlight Pencapaian' }), {
        label: 'Highlights',
        itemLabel: (item) => item.value,
      }),
      tech: fields.array(fields.text({ label: 'Teknologi yang Digunakan' }), {
        label: 'Tech Stack',
        itemLabel: (item) => item.value,
      }),
      link: fields.text({ label: 'Link Perusahaan (Opsional)' }),
    }),
    {
      label: 'Daftar Pengalaman Kerja',
      itemLabel: (item) => `${item.fields.role.value} @ ${item.fields.company.value}` || 'Pengalaman Kerja',
    }
  ),
};

const certificationsSchema = {
  certifications: fields.array(
    fields.object({
      title: fields.text({ label: 'Judul Sertifikasi' }),
      issuer: fields.text({ label: 'Penerbit' }),
      date: fields.text({ label: 'Tahun Penerbitan' }),
      credentialUrl: fields.text({ label: 'Link Kredensial (Opsional)' }),
      icon: fields.text({ label: 'Ikon (e.g. simple-icons:google)' }),
      color: fields.select({
        label: 'Warna Tema',
        options: [
          { label: 'Blue', value: 'blue' },
          { label: 'Purple', value: 'purple' },
          { label: 'Green', value: 'green' },
          { label: 'Pink', value: 'pink' },
          { label: 'Orange', value: 'orange' },
        ],
        defaultValue: 'blue',
      }),
    }),
    {
      label: 'Daftar Sertifikasi',
      itemLabel: (item) => item.fields.title.value || 'Sertifikasi',
    }
  ),
};

const testimonialsSchema = {
  testimonials: fields.array(
    fields.object({
      name: fields.text({ label: 'Nama Lengkap' }),
      role: fields.text({ label: 'Jabatan / Role' }),
      company: fields.text({ label: 'Perusahaan' }),
      avatar: fields.text({ label: 'Avatar URL (Opsional)' }),
      content: fields.text({ label: 'Testimoni / Komentar', multiline: true }),
      link: fields.text({ label: 'Link Profile (Opsional)' }),
    }),
    {
      label: 'Daftar Testimoni',
      itemLabel: (item) => `${item.fields.name.value} - ${item.fields.company.value}` || 'Testimoni',
    }
  ),
};

export default config({
  storage: isProduction
    ? {
        kind: 'github',
        repo: 'yanguswiradana/Portfolio-Website',
      }
    : {
        kind: 'local',
      },
  singletons: {
    // English Content Singletons
    profile_en: singleton({
      label: 'Profile (EN)',
      path: 'src/data/en/profile',
      format: { data: 'json' },
      schema: profileSchema,
    }),
    skills_en: singleton({
      label: 'Skills (EN)',
      path: 'src/data/en/skills',
      format: { data: 'json' },
      schema: skillsSchema,
    }),
    projects_en: singleton({
      label: 'Projects (EN)',
      path: 'src/data/en/projects',
      format: { data: 'json' },
      schema: projectsSchema,
    }),
    experience_en: singleton({
      label: 'Experiences (EN)',
      path: 'src/data/en/experience',
      format: { data: 'json' },
      schema: experienceSchema,
    }),
    certifications_en: singleton({
      label: 'Certifications (EN)',
      path: 'src/data/en/certifications',
      format: { data: 'json' },
      schema: certificationsSchema,
    }),
    testimonials_en: singleton({
      label: 'Testimonials (EN)',
      path: 'src/data/en/testimonials',
      format: { data: 'json' },
      schema: testimonialsSchema,
    }),

    // Indonesian Content Singletons
    profile_id: singleton({
      label: 'Profile (ID)',
      path: 'src/data/id/profile',
      format: { data: 'json' },
      schema: profileSchema,
    }),
    skills_id: singleton({
      label: 'Skills (ID)',
      path: 'src/data/id/skills',
      format: { data: 'json' },
      schema: skillsSchema,
    }),
    projects_id: singleton({
      label: 'Projects (ID)',
      path: 'src/data/id/projects',
      format: { data: 'json' },
      schema: projectsSchema,
    }),
    experience_id: singleton({
      label: 'Experiences (ID)',
      path: 'src/data/id/experience',
      format: { data: 'json' },
      schema: experienceSchema,
    }),
    certifications_id: singleton({
      label: 'Certifications (ID)',
      path: 'src/data/id/certifications',
      format: { data: 'json' },
      schema: certificationsSchema,
    }),
    testimonials_id: singleton({
      label: 'Testimonials (ID)',
      path: 'src/data/id/testimonials',
      format: { data: 'json' },
      schema: testimonialsSchema,
    }),
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      path: 'src/content/posts/*',
      slugField: 'title',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Title' }),
        locale: fields.select({
          label: 'Language',
          options: [
            { label: 'English', value: 'en' },
            { label: 'Indonesian', value: 'id' }
          ],
          defaultValue: 'en'
        }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        publishedDate: fields.date({ label: 'Published Date' }),
        coverImage: fields.text({ label: 'Cover Image URL (Optional)' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          images: true,
        })
      }
    })
  }
});
