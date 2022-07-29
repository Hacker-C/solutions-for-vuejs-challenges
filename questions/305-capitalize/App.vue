<script setup>
import { ref } from 'vue'
import VInput from './VInput.vue'
const value = ref('')
</script>

<template>
  <VInput type="text" v-model.capitalize="value" />
</template>
