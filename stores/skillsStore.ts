import { defineStore } from "pinia";
import type {ISkill}  from "~/types";

export const useSkillsStore = defineStore("skillSet", {
  state: () => ({
    skills: [] as ISkill[]
  }),
  getters: {},
  actions: {
    addSkill(skill: ISkill) {
      this.skills.push(skill); // Add the skill to the skills array in the state
    }
  },
});