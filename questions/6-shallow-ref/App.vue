<script setup lang="ts">
import { shallowRef, watch, triggerRef } from 'vue'

const state = shallowRef({ count: 1 })

// Does NOT trigger
watch(
  state,
  () => {
    console.log('State.count Updated')
  },
  { deep: true }
)

/**
 * Modify the code so that we can make the watch callback trigger.
 */
state.value.count = 2

triggerRef(state)
// docs: https://vuejs.org/api/reactivity-advanced.html#triggerref
// triggerRef: Force trigger effects that depends on a shallow ref. This is typically used after making deep mutations to the inner value of a shallow ref.
// triggerRef: 强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
</script>

<template>
  <div>
    <p>{{ state.count }}</p>
  </div>
</template>
