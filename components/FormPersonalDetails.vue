<template>
  <div class="md:grid md:grid-cols-2 md:gap-4">
    <div>
      <label>Förnamn</label>
      <Field
        name="firstName"
        class="w-full justify-center py-2 px-4 rounded-md shadow-md text-sm my-2
         font-medium text-slate-800 bg-card-background cursor-pointer"
        type="text"
        v-model="firstName"
      />
    </div>
    <div>
      <label>Efternamn</label>
      <Field
        name="lastName"
        class="w-full justify-center py-2 px-4 rounded-md shadow-md text-sm my-2
         font-medium text-slate-800 bg-card-background cursor-pointer"
        type="text"
        v-model="lastName"
      />
    </div>
    <div>
      <label>Telefon</label>
      <Field
        name="telephone"
        class="w-full justify-center py-2 px-4 rounded-md shadow-md text-sm my-2
         font-medium text-slate-800 bg-card-background cursor-pointer"
        type="text"
        v-model="telephone"
      />
    </div>
    <div>
      <label>Mejl</label>
      <Field
        name="email"
        class="w-full justify-center py-2 px-4 rounded-md shadow-md text-sm my-2
         font-medium text-slate-800 bg-card-background cursor-pointer"
        type="text"
        v-model="email"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Field } from "vee-validate";

const telephone = ref<string>("+46");
const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
</script>

<style scoped></style>
