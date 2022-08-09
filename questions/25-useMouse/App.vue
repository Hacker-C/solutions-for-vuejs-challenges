<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// Implement ...
// 本题解答无误，但测试用例过不去（？）
function useEventListener(
  target: EventTarget,
  event: keyof DocumentEventMap,
  callback: EventListener
) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

// Implement ...
function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', ((event: MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }) as EventListener)

  return { x, y }
}

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
