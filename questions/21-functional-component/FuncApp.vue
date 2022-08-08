<script setup lang="tsx">
import { ref, type FunctionalComponent as FC } from 'vue'
/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 */

interface Props {
  list: Array<{ name: string }>
  'active-index': number
}

const ListComponent: FC<Props> = (props: Props, { emit }) => {
  return (
    <>
      <ul>
        {props.list.map((item, index) => (
          <li
            onClick={() => emit('toggle', index)}
            active-index={index}
            style={index === props['active-index'] ? { color: 'red' } : undefined}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  )
}

const list = [{ name: 'John' }, { name: 'Doe' }, { name: 'Smith' }]

const activeIndex = ref(0)
function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
