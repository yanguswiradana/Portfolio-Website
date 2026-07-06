import projectsData from './projects.json';
export const projects = projectsData.projects;
export type Project = typeof projects[number];
