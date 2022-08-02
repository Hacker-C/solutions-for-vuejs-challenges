<script setup lang="ts">
import { Ref, ref } from 'vue'

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
 */
// basic composables
// 简单的自定义组合式函数
function useToggle(val: boolean): [Ref<boolean>, () => void] {
  const state = ref(val)
  const setState = () => void (state.value = !state.value)
  return [state, setState]
}

const [state, toggle] = useToggle(false)
</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">Toggle state</p>
</template>
