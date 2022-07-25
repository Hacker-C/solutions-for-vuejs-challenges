<script setup lang="ts">
import { reactive, toRef, Ref, toRefs } from 'vue'
function useCount() {
  const state = reactive({
    count: 0
  })
  function update(value: number) {
    state.count = value
  }
  return {
    state: toRefs(state),
    update
  }
}
// Ensure the destructured properties don't lose their reactivity
// explains: https://vuejs.org/api/reactivity-utilities.html#torefs
// 这里 state 被解构了，但是对于 reactive，解构会出现失去响应式的问题，使用 toRefs 可以解决。
const {
  state: { count },
  update
} = useCount()
</script>

<template>
  <div>
    <p>
      <span @click="update(count - 1)">-</span>
      {{ count }}
      <span @click="update(count + 1)">+</span>
    </p>
  </div>
</template>
