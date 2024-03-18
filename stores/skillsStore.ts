import { defineStore } from "pinia";
import type { ISkill } from "~/types";

export const useSkillsStore = defineStore("skillSet", {
  state: () => ({
    skills: [] as ISkill[],
  }),
  getters: {},
  actions: {
    addSkill(skill: ISkill) {
      // Check if the skill already exists
      const skillExists = this.skills.some(
        (s) =>
          s.skill.toUpperCase() === skill.skill.toUpperCase() 
      );


      if (!skillExists) {
        this.skills.push(skill);
      }
    },
    deleteSkill(skillToDelete: ISkill) {
      this.skills = this.skills.filter((s) => {

        return (
          s.skill !== skillToDelete.skill ||
          s.skillCategory !== skillToDelete.skillCategory
        );
      });
    },
  },
});
