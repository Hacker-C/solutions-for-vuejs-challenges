<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(1)
// 计算属性默认只提供了 getter，但也可以手动设置 setter。
// 需要注意，只要其中一个显式设置了，getter 和 setter 需要同时设置
const plusOne = computed({
  get() {
    return count.value + 1
  },
  set() {
    count.value++
  }
})

/**
 * Make the `plusOne` writable.
 * So that we can get the result `plusOne` to be 3, and `count` to be 2.
 */

plusOne.value++
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>
