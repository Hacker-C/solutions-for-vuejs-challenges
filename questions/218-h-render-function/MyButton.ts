// 万恶的 render h 渲染函数，什么反人类写法...

import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'MyButton',
  emits: ['customClick'],
  props: { disabled: Boolean },
  setup(_, { emit, slots }) {
    const children = slots.default()[0].children
    return { children, emit }
  },
  render({ children, disabled, emit }) {
    return h(
      'button',
      {
        disabled,
        onClick: () => emit('customClick')
      },
      children
    )
  }
})
