import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const x = ref(1)
    return {
      x
    }
  },
  render() {
    const { x } = this
    return <div>Hello World {x}</div>
  }
})
