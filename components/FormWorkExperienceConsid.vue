<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";


const roleAtWork = ref<string>("");

const workperiodStartDate = ref<string>("");/*  */
const workperiodEndDate = ref<string>("");
const employmentType = ref<string>("");
const workDescription = ref<string>("");
const skillSet = ref<string[]>([]);
const extraSkill = ref<string>("");
const category = ref("UNDEFINED");



/* function getSkills(details: string[]) {
  skillSet.value = details;
  console.log("skills", skillSet.value);
} */

const addToSkillSet = () => {
  if (extraSkill.value.trim) {
    const trimmedSkill = extraSkill.value.trim();

    skillSet.value.push(trimmedSkill);
    extraSkill.value = "";
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

    <br />

    <div v-for="skillUsed in skillSet">


    </div>


    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div>
        <label class="">Ytterliggare Skills</label>
        <Field
          name="extraSkill"
          class="form-input"
          type="text"
          @keyup.enter="addToSkillSet"
          v-model="extraSkill"
        />
      </div>
      <div>
        <label>Kategorie</label>
        <Field
          as="select"
          name="category"
          class="form-input"
          type="text"
          v-model="category"
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
          <option value="OTHER">
            Annat
          </option>
        </Field>
      </div>
    </div>
    <div
      class="bg-considBlue text-white -mx-6 lg:-mx-9 -mb-3 px-6 lg:px-9 py-3"
    >
      <p class="font-semibold">Angivna skills:</p>

      <p>{{ skillSet.join(", ") }}</p>
    </div>
  </div>
</template>

<style scoped></style>
