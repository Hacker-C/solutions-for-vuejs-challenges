<script setup lang="ts">
// - Prop Validation（Props 类型校验）
// - Vue3 docs: https://vuejs.org/guide/components/props.html#prop-validation
defineProps({
  type: {
    default: 'default',
    required: false,
    validator(value: string) {
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
    }
  }
})

// You can also use ts interface:
// interface Props {
//   type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
// }

// const { type = 'default' } = defineProps<Props>()
</script>

<template>
  <button>{{ type }}</button>
</template>
