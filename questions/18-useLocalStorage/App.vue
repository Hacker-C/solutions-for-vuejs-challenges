<script setup lang="ts">
import { Ref, ref, watchEffect, watch, computed } from 'vue'

/**
 * Implement the composable function
 * Make sure the function works correctly
 */

// 方法1：使用 watch / watchEffect
function useLocalStorage1(key: string, initialValue: any) {
  const value: Ref<any> = ref(localStorage.getItem(key) || initialValue)
  // (1) watch
  localStorage.setItem(key, value.value)
  watch(value, newVal => {
    localStorage.setItem(key, newVal)
  })
  // (2) watchEffect
  // watchEffect(() => {
  //   localStorage.setItem(key, value.value)
  // })
  return value
}

// 方法2：使用 computed
function useLocalStorage2(key: string, initialValue: any) {
  const x: Ref<any> = ref(initialValue)
  const value = computed({
    get: () => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, initialValue)
      }
      x.value = localStorage.getItem(key)
      return x.value
    },
    set: (newVal: any) => {
      localStorage.setItem(key, newVal)
      x.value = newVal
    }
  })
  return value
}

const counter = useLocalStorage1('counter', 0)

// We can get localStorage by triggering the getter:
console.log(counter.value)

// And we can also set localStorage by triggering the setter:

const update = () => counter.value++
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">Update</button>
</template>
