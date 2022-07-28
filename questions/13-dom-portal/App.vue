<script setup>
const msg = 'Hello World'
</script>

<template>
  <!-- Renders it to a child element of the `body` -->
  <!-- vue3 新特性：https://vuejs.org/guide/built-ins/teleport.html -->
  <Teleport to="body">
    <span>{{ msg }}</span>
  </Teleport>
</template>
