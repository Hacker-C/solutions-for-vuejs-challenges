<script setup>
import { ref, nextTick } from 'vue'
const count = ref(0)
const counter = ref(null)
async function increment() {
  count.value++
  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
   */
  // make sure the we can get the properly DOM, use nextTick()
  // 确保能正确获取更新之后的 DOM，使用 nextTick()
  // Vue docs: https://vuejs.org/api/general.html#nexttick
  await nextTick()
  console.log(+counter.value.textContent === 1)
}
</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>
