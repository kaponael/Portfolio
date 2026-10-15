import type { Skill } from "./skill";

export type SkillGroup = {
  id: string;
  title: string;
  skills: Skill[];
};
