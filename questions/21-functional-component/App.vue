<script setup lang="ts">
import { ref, h } from 'vue'

// 这题写 TSX 类型的函数过不了，写 h 函数就能过 ...
// TSX 写法在 FuncApp.vue 中

const ListComponent = (props, { emit }) =>
  h(
    'ul',
    props.list.map((item, index) => {
      return h(
        'li',
        {
          onClick: () => emit('toggle', index),
          style: props['active-index'] === index ? 'color: red' : undefined
        },
        item.name
      )
    })
  )

const list = [
  {
    name: 'John'
  },
  {
    name: 'Doe'
  },
  {
    name: 'Smith'
  }
]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
