<script setup lang="ts">
// 考察自定义 v-model 修饰符
// Handling v-model modifiers
// Vue3 docs: https://vuejs.org/guide/components/events.html#handling-v-model-modifiers
const props = defineProps<{
  modelValue: string
  modelModifiers: { default: () => {} }
}>()
const emit = defineEmits(['update:modelValue'])
function emitValue(e: Event) {
  let value = (e.target as HTMLInputElement).value
  if (props.modelModifiers['capitalize']) {
    value = value.slice(0, 1).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" @input="emitValue" :value="modelValue" />
</template>
