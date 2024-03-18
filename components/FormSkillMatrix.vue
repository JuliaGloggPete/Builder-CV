<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";
import type { ISkill } from "~/types";
import { useSkillsStore } from "~/stores/skillsStore";

const skillStore = useSkillsStore();

const matrixSkills = ref<ISkill[]>([]);

const sortedSkills = computed(() => {
  return skillStore.$state.skills.slice().sort((a, b) => {
    // Sort alphabetically by skill name
    return a.skill.localeCompare(b.skill);
  });
});

const addSkill2Matrix = (matrixSkill: ISkill) => {
  const skillExists = matrixSkills.value.some(
    (s) => s.skill === matrixSkill.skill
  );

  if (!skillExists) {
    matrixSkills.value.push(matrixSkill);
  }
};

const addProficiency = (skill: ISkill, proficiency: number) => {
  const index = matrixSkills.value.findIndex((s) => s.skill === skill.skill);
  if (index !== -1) {
    matrixSkills.value[index].proficiency = proficiency;

    const skillIndex = skillStore.skills.findIndex(
      (s) => s.skill === skill.skill
    );
    if (skillIndex !== -1) {
      skillStore.skills[skillIndex].proficiency = proficiency;
    }
  }
};
</script>

<template>
  <div class="form-section">
    <div>
      <p class="form-head-of-section">Skillmatrix</p>
      <p>
        Välj vilka av dina skills du vill visa i matrixen och ange
        proffesionlitäten till den
      </p>

      <div class="-mx-6 lg:-mx-9 -mb-3 px-6 lg:px-9 py-3">
        <p class="font-semibold">Välj</p>
        <div class="flex flex-wrap">
          <p
            v-for="(skill, index) in sortedSkills"
            :key="index"
            @click="() => addSkill2Matrix(skill)"
            class="cursor-pointer"
          >
            {{ skill.skill }},&nbsp;
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2">
        <div
          class="flex flex-wrap text-center"
          v-for="(skill, index) in matrixSkills"
          :key="index"
        >
          <p class="mr-6 mt-4">{{ skill.skill }}</p>
          <span>
            <Field
              :name="`matrixSkill_${index}`"
              class="form-input"
              as="select"
              type="text"
              @change="($event) => addProficiency(skill, $event.target.value)"
              v-model="skill.proficiency"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
          </span>
        </div>
      </div>

      <!-- Grid with column headers -->
      <div
        class="mt-8 grid mx-16 px-4 py-2 grid-cols-2 border-4 bg-considRed text-white"
      >
        <div>Skills</div>
        <div>Proficiency (1-5)</div>
      </div>

      <!-- Skills with proficiency -->
      <div v-for="(skill, index) in skillStore.$state.skills" :key="index">
        <div
          v-if="skillStore.hasProficiency(skill.skill)"
          class="grid mx-16 px-4 py-2 grid-cols-2 border-4 bg-white"
        >
          <div>{{ skill.skill }}</div>
          <div>{{ skill.proficiency }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
