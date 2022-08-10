import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:'App',
  setup() {
    let x = ref(1)
    return {
        x
    }
  },
  render(){
    let { x } = this 
    return (
        <div>Hello World {x}</div>
    )
  }
})
