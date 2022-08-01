<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from 'vue'

const counter = ref(1)

// use the `effectScope` API to make these effects stop together after being triggered once

const scope = effectScope()

scope.run(() => {
  const doubled = computed(() => counter.value * 2)
  watch(doubled, () => console.log(doubled.value))
  watchEffect(() => console.log(`Count: ${doubled.value}`))
})

counter.value = 2

// this is also right:
// setTimeout(() => {
//   scope.stop()
// })

setTimeout(() => {
  counter.value = 4
  scope.stop()
  // be careful with the asynchronous, make sure `scoped.top` task is in asynchronous tasks queue with the task of `the change of counter`
  // 注意处理 scope 的时机，由于 setTimeout 的回调是异步的，因此也要使得 scope.stop 放入异步队列中 `counter 被修改` 这个任务的后面。
})
</script>

<template>
  <div>
    <p>
      <!-- {{ doubled }} -->
    </p>
  </div>
</template>
