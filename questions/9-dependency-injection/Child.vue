<script setup lang="ts">
// Add a piece of code to make the `count` value get injected into the child component.
// provide/inject
import { inject } from 'vue'

const count = inject('count')
</script>

<template>
  {{ count }}
</template>
