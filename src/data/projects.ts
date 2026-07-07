import projectsData from './en/projects.json';
export const projects = projectsData.projects;
export type Project = typeof projects[number];
