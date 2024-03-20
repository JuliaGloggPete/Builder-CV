<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";
import type { IWorkExperience, ISkill } from "~/types";
import { useWorkexperienceStore } from "~/stores/workExpierienceStore";
import { useSkillsStore } from "~/stores/skillsStore";

const skillStore = useSkillsStore();

const roleAtWork = ref<string>("");

const workperiodStartDate = ref<string>("");
const workperiodEndDate = ref<string>("");
const employmentType = ref<string>("");
const workDescription = ref<string>("");
const skillSetWork = ref<ISkill[]>([]);
const extraSkill = ref<ISkill[]>([]);

const sortedSkills = computed(() => {
  return skillStore.$state.skills.slice().sort((a, b) => {
    return a.skill.localeCompare(b.skill);
  });
});

const extraAddToSkillSetWork = (skill: string, skillCategory: string) => {
  const extraSkillToAdd = { skill, skillCategory, proficiency: undefined };

  if (
    !skillSetWork.value.some((existingSkill) => existingSkill.skill === skill)
  ) {
    skillSetWork.value.push(extraSkillToAdd);
  }
};
</script>

<template>
  <div class="form-section">
    <div>
      <p class="form-head-of-section">Uppdrag hos Consid</p>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div>
        <label>Anställningsomfattning</label>
        <Field
          name="employmentType"
          class="form-input"
          type="text"
          placeholder="Anställnings omfattning"
          v-model="employmentType"
        />
      </div>
      <div>
        <label>Roll hos uppdragsgivaren</label>
        <Field
          name="roleAtWork"
          class="form-input"
          type="text"
          placeholder="t.ex. FrontendDevelopper"
          v-model="roleAtWork"
        />
      </div>

      <div>
        <label>Arbetsperiodens start</label>
        <Field
          name="workperiodStartDate"
          class="form-input"
          type="date"
          v-model="workperiodStartDate"
        />
      </div>

      <div>
        <label>Arbeitsperiodens slut</label>
        <Field
          name="workperiodEndDate"
          class="form-input"
          type="date"
          v-model="workperiodEndDate"
        />
      </div>
    </div>

    <div>
      <label>Samanfattande arbetsupptrag</label>
      <Field
        as="textarea"
        name="workDescription"
        class="form-input"
        maxlength="1300"
        type="text"
        cols="30"
        rows="10"
        v-model="workDescription"
      />
    </div>

    <div class="my-4">
      <p>Tekniker som användes</p>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 my-2">
        <div v-for="(skill, index) in sortedSkills" :key="skill.skill">
          <div class="flex flex-wrap">
            <!-- Checkbox for the skill -->
            <Field
              :name="`availableSkill_${index}`"
              :value="skill.skill"
              type="checkbox"
              class="ml-1 mr-2"
            />
            <p>{{ skill.skill }}</p>
          </div>
        </div>
      </div>

      <div class="md:grid md:grid-cols-3 md:gap-4">
        <div class="grid grid-cols-2">
          <label class="mt-4">Ytterliggare teknik</label>
          <Field
            name="extraSkill"
            class="form-input"
            type="text"
            v-model="extraSkill"
          />
        </div>

        <div class="grid grid-cols-2">
          <label class="text-center mt-4">Kategorie</label>
          <Field
            as="select"
            name="category"
            class="form-input"
            type="text"
            v-model="extraSkill"
          >
            <option value="UNDEFINED">ej angiven</option>
            <option value="PROGRAMMING_LANGUAGE">Programmerings språk</option>
            <option value="FRAMEWORK">Ramverk</option>
            <option value="TOOLS">Verktyg</option>
            <option value="SOFTWARE_DEVELOPMENT_PRACTICES_METHODOLOGIES">
              Development practices/methods
            </option>
            <option value="SERVER_DATABASE_TECHNOLOGIES">
              Server & Databas technologier
            </option>
            <option value="OTHER">Annat</option>
          </Field>
        </div>

        <div class="flex items-center justify-center">
          <button class="btn">lägg till</button>
        </div>
      </div>
    </div>
    <div
      class="bg-considBlue text-white -mx-6 lg:-mx-9 -mb-3 px-6 lg:px-9 py-3"
    >
      <p class="font-semibold">Angivna Arbetsuppddrag:</p>
    </div>
  </div>
</template>

<style scoped></style>
