<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";

const educationPlace = ref<string>("");
const educationStartDate = ref<string>("");
const educationEndDate = ref<string>("");
const educationDescription = ref<string>("");
const educations = ref<string[]>([]);
const certificates = ref<string[]>([]);
const certificate = ref<string>("");
const courseTitle = ref<string>("");
const courseStartDate = ref<string>("");
const courseEndDate = ref<string>("");
const courses = ref<string[]>([]);

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
  );
};
const addCourse = () => {
  const trimmedCourse = courseTitle.value.trim();
  const course = `${trimmedCourse} -  (${courseStartDate.value} - ${courseEndDate.value})`;

  courses.value.push(course);
  courseTitle.value = "";
  courseStartDate.value = "";
  courseEndDate.value = "";

};

const deleteCourse = (item: string) => {
  courses.value = courses.value.filter(
    (courses) => courses !== item
  );
};

const addCertificate = () => {
  const trimmedCertificate = certificate.value.trim();
  certificates.value.push(trimmedCertificate);
  certificate.value = "";
};
const deleteCertificate = (item: string) => {
  certificates.value = certificates.value.filter(
    (certificates) => certificates !== item
  );
};
</script>

<template>
  <div class="form-section">
    <div>
      <p class="form-head-of-section">Samanfattat Kompetens</p>
    </div>
    <div>
      <p class="text-2xl font-semibold uppercase my-3">Utbildningar</p>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div>
        <label>Utbildning</label>
        <Field
          name="educationDescription"
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
        <label>Utbildningens start</label>
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

    <ul>
      <li
        v-for="(education, index) in educations"
        :key="index"
        class="flex mt-3 justify-between"
      >
        {{ education }}
        <button class="btn" @click="deleteEducation(education)">
          <Icon name="ph:trash" />
        </button>
      </li>
    </ul>
    <div>
      <p class="text-2xl font-semibold uppercase my-3">Certificeringar</p>
    </div>

    <div>
      <div>
        <label>Certificering</label>
        <Field
          name="certificate"
          class="form-input"
          @keyup.enter="addCertificate()"
          type="text"
          placeholder="t.ex. Certificate, Java Programmer"
          v-model="certificate"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button class="btn" @click.prevent="addCertificate">Lägg till</button>
    </div>

    <ul>
      <li
        v-for="(certificate, index) in certificates"
        :key="index"
        class="flex mt-3 justify-between"
      >
        {{ certificate }}
        <button class="btn" @click="deleteCertificate(certificate)">
          <Icon name="ph:trash" />
        </button>
      </li>
    </ul>
    <div>
      <div>
        <p class="text-2xl font-semibold uppercase my-3">Kurser</p>
      </div>
      <div class="md:grid md:grid-cols-2 md:gap-4">
        <div>
          <label>Kurs start</label>
          <Field
            name="courseStartDate"
            class="form-input"
            type="date"
            v-model="courseStartDate"
          />
        </div>

        <div>
          <label>Kurs slut</label>
          <Field
            name="courseEndDate"
            class="form-input"
            type="date"
            v-model="courseEndDate"
          />
        </div>
      </div>
      <div>
        <label>Kurs</label>
        <Field
          name="course"
          class="form-input"
          @keyup.enter="addCourse()"
          type="text"
          placeholder="Kursbeskrivning"
          v-model="courseTitle"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button class="btn" @click.prevent="addCourse">Lägg till</button>
    </div>

    <ul>
      <li
        v-for="(course, index) in courses"
        :key="index"
        class="flex mt-3 justify-between"
      >
        {{ course }}
        <button class="btn" @click="deleteCourse(course)">
          <Icon name="ph:trash" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
