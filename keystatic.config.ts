import { config, fields, singleton } from '@keystatic/core';

const isProduction = process.env.NODE_ENV === 'production';

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
    profile: singleton({
      label: 'Profile',
      path: 'src/data/profile',
      format: { data: 'json' },
      schema: {
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
      },
    }),
    skills: singleton({
      label: 'Skills',
      path: 'src/data/skills',
      format: { data: 'json' },
      schema: {
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
      },
    }),
    projects: singleton({
      label: 'Projects',
      path: 'src/data/projects',
      format: { data: 'json' },
      schema: {
        projects: fields.array(
          fields.object({
            title: fields.text({ label: 'Judul Project' }),
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
      },
    }),
    experience: singleton({
      label: 'Experiences',
      path: 'src/data/experience',
      format: { data: 'json' },
      schema: {
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
      },
    }),
  },
});
