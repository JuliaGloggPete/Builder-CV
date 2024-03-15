<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";

/* 
+ workperiodStartDate: Date (Month + year)
+ workperiodEndDate: Date (Month + year)
+ roleAtWork: String
+ employmentType: String
+ technics: List <String>
+ workDescription: String
+ workReference: String
*/

const roleAtWork = ref<string>("");

const workperiodStartDate = ref<string>("");
const workperiodEndDate = ref<string>("");
const employmentType = ref<string>("");
const workDescription = ref<string>("");
const skills = ref<string[]>([]);
const extraSkill = ref<string>("");
const category = ref("UNDEFINED");

const possibleLanguages = ref<string[]>([
  "Assembly Language",
  "C",
  "CSS",
  "C#",
  "C++",
  "Dart",
  "Fortran",
  "Go",
  "Groovy",
  "Java",
  "JavaScript",
  "Kotlin",
  "Lisp",
  "Lua",
  "MATLAB",
  "Perl",
  "PHP",
  "Python",
  "R",
  "Ruby",
  "Rust",
  "Scala",
  "Scheme",
  "Shell Scripting",
]);

const possibleFrames = ref<string[]>([
  "Angular",
  "ASP.NET",
  "ASP.NET Core",
  "Backbone.js",
  "Django",
  "Express.js",
  "Flask",
  "Laravel",
  "Node.js",
  "React",
  "Ruby on Rails",
  "Spring Framework",
  "Symfony",
  "Vue.js",
]);
const possibleTools = ref<string[]>([
  "Android Studio",
  "Blender",
  "Eclipse",
  "Git",
  "GitHub",
  "IntelliJ IDEA",
  "JIRA",
  "Maven",
  "NetBeans",
  "Subversion",
  "Visual Studio",
  "Visual Studio Code",
]);
const possibleMethodologies = ref<string[]>([
  "Agile",
  "Continuous Integration (CI)",
  "Domain-Driven Design (DDD)",
  "Extreme Programming (XP)",
  "Rational Unified Process (RUP)",
  "Scrum",
  "Test-Driven Development (TDD)",
  "Unified Modeling Language (UML)",
]);

const addSkill = () => {
  if (extraSkill.value.trim) {
    const trimmedSkill = extraSkill.value.trim();

    skills.value.push(trimmedSkill);
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

    <p class="font-semibold mr-3">Programmerings språk:</p>
    <div class="flex flex-wrap mt-2">
      <div
        v-for="possibleLanguage in possibleLanguages"
        :key="possibleLanguage"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleLanguage"
          type="checkbox"
          class="mr-2"
          v-model="skills"
        />
        <label class="mr-4"> {{ possibleLanguage }}</label>
      </div>
    </div>
    <p class="font-semibold mr-3 mt-4">Verktyg:</p>
    <div class="flex flex-wrap mt-2">
      <div
        v-for="possibleTool in possibleTools"
        :key="possibleTool"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleTool"
          type="checkbox"
          class="mr-2"
          v-model="skills"
        />
        <label class="mr-4"> {{ possibleTool }}</label>
      </div>
    </div>

    <p class="font-semibold mr-3 mt-4">Ramverk:</p>
    <div class="flex flex-wrap my-2">
      <div
        v-for="possibleFrame in possibleFrames"
        :key="possibleFrame"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleFrame"
          type="checkbox"
          class="mr-2"
          v-model="skills"
        />
        <label class="mr-4"> {{ possibleFrame }}</label>
      </div>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div>
        <label class="">Ytterliggare Skills</label>
        <Field
          name="extraSkill"
          class="form-input"
          type="text"
          @keyup.enter="addSkill"
          v-model="extraSkill"
        />
      </div>
      <div>
        <label>kategorie</label>
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
        </Field>
      </div>
    </div>
    <div
      class="bg-considBlue text-white -mx-6 lg:-mx-9 -mb-3 px-6 lg:px-9 py-3"
    >
      <p class="font-semibold">Angivna skills:</p>

      <p>{{ skills.join(", ") }}</p>
    </div>
  </div>
</template>

<style scoped></style>
