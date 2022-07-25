<script setup lang="ts">
import { onMounted, inject, Ref, onBeforeUnmount } from 'vue'

const timer = inject('timer')
const count = inject('count')

onMounted(() => {
  ;(timer as Ref).value = window.setInterval(() => {
    ;(count as Ref).value++
  }, 1000)
})

// before Child component is unmounted, delete the timer
// 在 Child 组件卸载前，清除循环计时器
onBeforeUnmount(() => {
  window.clearInterval((timer as Ref).value)
})
</script>

<template>
  <div>
    <p>Child Component: {{ count }}</p>
  </div>
</template>
