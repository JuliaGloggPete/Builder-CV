<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";
import type { ISkill } from "~/types";
import { useSkillsStore } from "~/stores/skillsStore";

const skillStore = useSkillsStore();
//TODO jag tror det blev obsolet
const skills = ref<ISkill[]>([]);

const extraLanguage = ref<string>("");
const extraFrame = ref<string>("");
const extraMethodology = ref<string>("");
const extraTool = ref<string>("");

const possibleLanguages = ref<ISkill[]>(
  [
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
  ].map((language) => ({
    skill: language,
    skillCategory: "language",
    proficiency: 3,
  }))
);

const possibleFrames = ref<ISkill[]>(
  [
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
  ].map((frame) => ({
    skill: frame,
    skillCategory: "frame",
    proficiency: undefined,
  }))
);

const possibleTools = ref<ISkill[]>(
  [
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
  ].map((tool) => ({
    skill: tool,
    skillCategory: "tool",
    proficiency: undefined,
  }))
);

const possibleMethodologies = ref<ISkill[]>(
  [
    "Agile",
    "Continuous Integration (CI)",
    "Domain-Driven Design (DDD)",
    "Extreme Programming (XP)",
    "Rational Unified Process (RUP)",
    "Scrum",
    "Test-Driven Development (TDD)",
    "Unified Modeling Language (UML)",
  ].map((method) => ({
    skill: method,
    skillCategory: "mehtod",
    proficiency: undefined,
  }))
);

const checkboxChanged = (
  skill: string,
  skillCategory: string,
  checked: boolean
) => {
  if (checked) {
    // Add the skill if checked
    const skillToAdd = { skill, skillCategory, proficiency: undefined };
    if (!skills.value.some((existingSkill) => existingSkill.skill === skill)) {
      skills.value.push(skillToAdd);
      skillStore.addSkill(skillToAdd);
    }
  } else {
    // Remove the skill if unchecked
    const indexToRemove = skills.value.findIndex(
      (existingSkill) => existingSkill.skill === skill
    );
    if (indexToRemove !== -1) {
      const removedSkill = skills.value.splice(indexToRemove, 1)[0];
      skillStore.deleteSkill(removedSkill);
    }
  }
};

const addSkill = (type: string) => {
  let skill = "";
  let skillCategory = "";

  //TODO loopar igenom först om skillen redan finns

  switch (type) {
    case "language":
      skill = extraLanguage.value.trim();
      skillCategory = "language";
      break;
    case "frame":
      skill = extraFrame.value.trim();
      skillCategory = "framework";
      break;
    case "tool":
      skill = extraTool.value.trim();
      skillCategory = "tool";
      break;
    case "method":
      skill = extraMethodology.value.trim();
      skillCategory = "methodology";
      break;
  }

  const skillToAdd: ISkill = { skill, skillCategory, proficiency: undefined };

  if (skill) {
    if (!skills.value.some((existingSkill) => existingSkill.skill === skill)) {
      skillStore.addSkill(skillToAdd);

      switch (type) {
        case "language":
          extraLanguage.value = "";
          break;
        case "frame":
          extraFrame.value = "";
          break;
        case "tool":
          extraTool.value = "";
          break;
        case "method":
          extraMethodology.value = "";
          break;
      }
    }
  }
};
</script>

<template>
  <div class="form-section">
    <div>
      <p class="form-head-of-section">Skill</p>
    </div>

    <p class="font-semibold mr-3">Programmerings språk:</p>
    <div class="flex flex-wrap mt-2">
      <div
        v-for="possibleLanguage in possibleLanguages"
        :key="possibleLanguage.skill"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleLanguage.skill"
          type="checkbox"
          class="mr-2"
          @change="
            checkboxChanged(
              possibleLanguage.skill,
              'language',
              $event.target.checked
            )
          "
        />
        <label class="mr-4"> {{ possibleLanguage.skill }}</label>
      </div>
    </div>
    <div class="flex">
      <label class="w-2/6 self-center">Ytterliggare Språk</label>
      <Field
        name="extraLanguage"
        class="form-input"
        type="text"
        @keyup.enter="addSkill('language')"
        @keyup.,="addSkill('language')"
        v-model="extraLanguage"
      />
    </div>

    <p class="font-semibold mr-3 mt-4">Verktyg:</p>
    <div class="flex flex-wrap mt-2">
      <div
        v-for="possibleTool in possibleTools"
        :key="possibleTool.skill"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleTool.skill"
          type="checkbox"
          class="mr-2"
          v-model="skills"
          @change="
            checkboxChanged(possibleTool.skill, 'tool', $event.target.checked)
          "
        />
        <label class="mr-4"> {{ possibleTool.skill }}</label>
      </div>
    </div>
    <div class="flex">
      <label class="w-2/6 self-center"> Ytterliggare Verktyg</label>
      <Field
        name="extraTool"
        class="form-input"
        type="text"
        @keyup.enter="addSkill('tool')"
        @keyup.,="addSkill('tool')"
        v-model="extraTool"
      />
    </div>

    <p class="font-semibold mr-3 mt-4">Ramverk:</p>
    <div class="flex flex-wrap my-2">
      <div
        v-for="possibleFrame in possibleFrames"
        :key="possibleFrame.skill"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleFrame.skill"
          type="checkbox"
          class="mr-2"
          v-model="skills"
          @change="
            checkboxChanged(possibleFrame.skill, 'frame', $event.target.checked)
          "
        />
        <label class="mr-4"> {{ possibleFrame.skill }}</label>
      </div>
    </div>
    <div class="flex">
      <label class="w-2/6 self-center"> Ytterliggare Ramverk</label>
      <Field
        name="extraFrame"
        class="form-input"
        type="text"
       
        @keyup.,="addSkill('frame')"
        v-model="extraFrame"
      />
    </div>

    <p class="font-semibold mr-3 mt-4">Methoder:</p>
    <div class="flex flex-wrap my-2">
      <div
        v-for="possibleMethod in possibleMethodologies"
        :key="possibleMethod.skill"
        class="flex"
      >
        <Field
          name="skill"
          :value="possibleMethod.skill"
          type="checkbox"
          class="mr-2"
          v-model="skills"
          @change="
            checkboxChanged(
              possibleMethod.skill,
              'method',
              $event.target.checked
            )
          "
        />
        <label class="mr-4"> {{ possibleMethod.skill }}</label>
      </div>
    </div>
    <div class="flex">
      <label class="w-2/6 self-center"> Ytterliggare Methoder</label>
      <Field
        name="extraMethodologie"
        class="form-input"
        type="text"
        @keyup.enter="addSkill('method')"
        @keyup.,="addSkill('mehtod')"
        v-model="extraMethodology"
      />
    </div>

    <div
      class="bg-considBlue text-white -mx-6 lg:-mx-9 -mb-3 px-6 lg:px-9 py-3"
    >
      <p class="font-semibold">Angivna skills:</p>

      <div class="flex flex-wrap">
        <p
          v-for="(skill, index) in skillStore.$state.skills"
          :key="skill.skill"
        >
          {{ skill.skill }},&nbsp;
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
