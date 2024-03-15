<template>
  <div class="form-section">
    <div>
      <p class="form-head-of-section">Allmänt</p>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div>
        <label>Förnamn</label>
        <Field
          name="firstName"
          class="form-input"
          type="text"
          placeholder="Förnamn"
          v-model="firstName"
        />
      </div>
      <div>
        <label>Efternamn</label>
        <Field
          name="lastName"
          class="form-input"
          placeholder="Efternamn"
          type="text"
          v-model="lastName"
        />
      </div>
      <div>
        <label>Telefon</label>
        <Field
          name="telephone"
          class="form-input"
          type="text"
          v-model="telephone"
        />
      </div>
      <div>
        <label>Jobtitel</label>
        <Field name="email" class="form-input" type="text" v-model="email" />
      </div>
      <div>
        <label>Mejl</label>
        <Field name="email" class="form-input" type="text" v-model="email" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label>Kompetenslevel</label>
          <Field
            as="select"
            name="levelOfCompetence"
            class="form-input"
            type="text"
            v-model="levelOfCompetence"
          >
            <option value="UNDEFINED">ej angiven</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>

        <div>
          <label>Jobbar i yrket sen</label>
          <Field
            name="startWorkInField"
            class="form-input"
            type="date"
            v-model="workingSince"
          />
        </div>
      </div>

      <div>
        <label>Bild</label>

        <input
          type="file"
          name="pic"
          id="pic"
          accept="image/png, image/gif, image/jpeg, image/webp"
          @change="handleFileChange"
          class="w-full"
        />
      </div>
      <div class="flex justify-center items-center">
        <div
          class="w-48 h-48 overflow-hidden object-cover border-solid border-2 items-center text-center border-gray-300 rounded-full"
        >
          <img :src="imageUrl" alt="Chosen Image" />
        </div>
      </div>
    </div>

    <label>Kort beskrivning om en själv</label>
    <Field
      as="textarea"
      name="description"
      class="form-input"
      maxlength="1300"
      type="text"
      cols="30"
      rows="10"
      v-model="shortDescription"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";

const telephone = ref<string>("+46");
const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const jobTitle = ref<string>("");
const levelOfCompetence = ref("UNDEFINED");

const workingSince = ref<string>("");
const shortDescription = ref<string>("");
const imageUrl = ref<string | undefined>(undefined);
const files = ref<FileList | null>(null);

function handleFileChange(e: Event) {
  files.value = (e.target as HTMLInputElement).files;
  if (files.value && files.value.length > 0) {
    imageUrl.value = URL.createObjectURL(files.value[0]);
    console.log(files.value);
  } else {
    imageUrl.value = undefined;
  }
}
</script>

<style scoped></style>
