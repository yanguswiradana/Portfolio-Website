import skillsData from './en/skills.json';
export const skillGroups = skillsData.skillGroups;
export type Skill = typeof skillGroups[number]['skills'][number];
export type SkillGroup = typeof skillGroups[number];
