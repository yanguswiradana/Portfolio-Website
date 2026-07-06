import experienceData from './experience.json';
export const experience = experienceData.experience;
export type Experience = typeof experience[number];
