<template>
  <Form>
    <div class="flex">
        <div class="mr-6 mt-4">
          <label>Språket CV-skrivas i</label>
        </div>

        <span>
          <Field
            name="language"
            class="form-input"
            as="select"
            type="text"
            placeholder="Förnamn"
            v-model="language"
          >
            <option value="SE">SE</option>
            <option value="EN">EN</option>
          </Field></span
        >
      </div>
    <FormGeneralInfo />
    <FormSkills/>
    <FormWorkExperienceConsid/>
    <FormEducationInfo/>
  </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import FormGeneralInfo from "~/components/FormGeneralInfo.vue";

const language = ref("SE");
</script>

<style lang="postcss">
.form-input {
  @apply w-full bg-slate-100 justify-center py-2 px-4 rounded-sm shadow-md text-sm my-2 font-medium text-slate-800 cursor-pointer;
}
.btn {
  @apply bg-considBlue text-white rounded-lg  px-4 py-2
}
.form-section{
  @apply border-2 mb-4 border-considBlue bg-white text-considBlue max-w-6xl mx-auto px-6 lg:px-9 py-3 w-full flex flex-col mt-11;

}
</style>
