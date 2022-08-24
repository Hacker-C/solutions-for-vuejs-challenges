<script setup lang="ts">
import { onMounted, defineCustomElement } from 'vue'

/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
 */

// 官方文档：https://cn.vuejs.org/guide/extras/web-components.html
// Web components: https://developer.mozilla.org/zh-CN/docs/Web/Web_Components
// window.customElements: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/customElements

const VueJs = defineCustomElement({
  props: {
    message: String
  },
  template: `<span>{{message}}</span>`
})

customElements.define('vue-js', VueJs)

onMounted(() => {
  document.getElementById('app')!.innerHTML = '<vue-js message="Hello Vue.js"></vue-js>'
})
</script>

<template>
  <div id="app"></div>
</template>
