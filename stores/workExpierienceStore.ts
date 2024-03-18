import { defineStore } from "pinia";
import type { IWorkExperience } from "~/types";

export const useWorkexperienceStore = defineStore("workExpieriences", {
  state: () => ({
    workExpieriences: [] as IWorkExperience[],
  }),
  getters: {},
  actions: {
    addWorkExperience(workExperience: IWorkExperience) {
      /*export interface IWorkExperience {
  workperiodStartDate: string;
  workperiodEndDate: string;
  roleAtWork: string;
  employmentType: string;
  technicsUsed?: ISkill[];
  workDescription: string;
}
*/

      const workEspierienceExists = this.workExpieriences.some(
        (s) =>
          s.workDescription.toUpperCase() ===
          workExperience.workDescription.toUpperCase()
      );

      if (!workEspierienceExists) {
        this.workExpieriences.push(workExperience);
      }
    },
    deleteSkill(workExperienceToDelete: IWorkExperience) {
      this.workExpieriences = this.workExpieriences.filter((s) => {
        return (
          s.workDescription !== workExperienceToDelete.workDescription ||
          s.roleAtWork !== workExperienceToDelete.roleAtWork
        );
      });
    },
  },
});
