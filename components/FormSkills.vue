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
const technicsUsed = ref<string[]>([]);
const technic = ref<string>("");
const workDescription = ref<string>("");
const skills = ref<string[]>([]);
const extraSkill = ref<string>("");
const extraSkills = ref<string[]>([]);
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
  if (extraSkill.value.trim()) {
    //TODO check om det finns redan
    //TODO add category accordingly om vi vill det

    let trimmedSkill = extraSkill.value.trim();
    if (trimmedSkill.includes(",")) {
      trimmedSkill = trimmedSkill.replace(",", ""); // Remove comma
    }

    skills.value.push(trimmedSkill);
    extraSkill.value = "";
  }
};
</script>

<template>
  <div class="form-section">
    <div>
      <p class="text-3xl font-semibold uppercase my-3">Skills</p>
    </div>

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
    <div class="flex">
      <label class="w-2/6 self-center">Ytterliggare Språk</label>
      <Field
        name="extraSkill"
        class="form-input"
        type="text"
        @keyup.enter="addSkill"
        v-model="extraSkill"
      />
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
    <div class="flex">
      <label class="w-2/6 self-center"> Ytterliggare Verktyg</label>
      <Field
        name="extraSkill"
        class="form-input"
        type="text"
        @keyup.enter="addSkill"
        @keyup.,="addSkill"
        v-model="extraSkill"
      />
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
      <p>{{ extraSkills.join(", ") }}</p>
    </div>
  </div>
</template>

<style scoped></style>
