
<script setup lang="ts">
import type { IWorkExperience, ISkill } from '~/types';
import { useWorkexperienceStore } from '~/stores/workExpierienceStore';

const hej = "Hej"

const {workExpierience} = defineProps(['workExpierience'])
</script>


<template>
  <div class="border-2 bg-white border-considRed">
  
    Roll: {{ hej }}



  </div>
</template>


<style scoped>

</style>