<script setup lang="ts">
import { Ref, ref, watch } from 'vue'

const count = ref(0)

/**
 * Implement the until function
 */

function until(initial: Ref<number>) {
  function toBe(value: number) {
    return new Promise<void>(resolve => {
      watch(initial, newVal => {
        if (newVal === value) resolve()
      })
    })
  }

  return {
    toBe
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}
</script>

<template>
  <p @click="increase">Increase</p>
</template>
