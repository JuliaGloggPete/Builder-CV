<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";

const educationPlace = ref<string>("");
const educationStartDate = ref<string>("");
const educationEndDate = ref<string>("");
const educationDescription = ref<string>("");
const educations = ref<string[]>([]);

const addEducation = () => {
  const trimmedEducation = educationDescription.value.trim();
  const education = `${trimmedEducation} - ${educationPlace.value} (${educationStartDate.value} - ${educationEndDate.value})`;

  educations.value.push(education);
  educationPlace.value = "";
  educationStartDate.value = "";
  educationEndDate.value = "";
  educationDescription.value = "";
  
};

const deleteEducation = (item: string) => {
  educations.value = educations.value.filter(
    (educations) => educations !== item

  )
}

/*  
export interface IEducationInfo {
  educationStartDate: IDate;
  educationEndDate: IDate;
  educationType: string;
  educationDescription: string;
}
*/
</script>

<template>
  <div class="form-section">
    <div>
      <p class="text-3xl font-semibold uppercase my-3">Utbildningar</p>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div>
        <label>Utbildning</label>
        <Field
          name="eduction"
          class="form-input"
          type="text"
          placeholder="Utbildnings beteckning"
          v-model="educationDescription"
        />
      </div>
      <div>
        <label>Utbildningens Institut</label>
        <Field
          name="educationPlace"
          class="form-input"
          placeholder="t.ex. Lunds Universitet"
          type="text"
          v-model="educationPlace"
        />
      </div>

      <div>
        <label>UtbildningensStart</label>
        <Field
          name="educationStartDate"
          class="form-input"
          type="date"
          v-model="educationStartDate"
        />
      </div>

      <div>
        <label>Utbildningens slut</label>
        <Field
          name="educationEndDate"
          class="form-input"
          type="date"
          v-model="educationEndDate"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button class="btn" @click.prevent="addEducation">Lägg till</button>
    </div>

    <ul >
      <li
        v-for="(education, index) in educations"
        :key="index"
        class="flex mt-3 justify-between"
      >
        {{ education }}
        <button class="btn"
        @click="deleteEducation(education)">
          <Icon name="ph:trash" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
