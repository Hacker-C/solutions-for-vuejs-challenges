<script setup lang="ts">
const VDebounceClick = {
  // binding 获取指令相关参数
  // 参考文档：https://staging-cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
  mounted: (el: HTMLElement, binding: { value: Function; arg: number }) => {
    el.addEventListener('click', debounce(binding.value, binding.arg))
  }
}

function debounce(fn: Function, delay: number) {
  let timer = null
  let clickCount = 0
  return function () {
    // 保证第一次点击立即执行
    clickCount++
    if (clickCount === 1) return void fn()
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn()
    }, delay)
  }
}

function onClick() {
  console.log('Only triggered once when clicked many times quickly')
}
</script>

<template>
  <button v-debounce-click:200="onClick">Click on it many times quickly</button>
</template>
