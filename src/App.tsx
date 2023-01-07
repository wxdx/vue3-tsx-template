import { defineComponent, ref, nextTick, provide } from 'vue'
import { zhCN, NConfigProvider, NMessageProvider } from 'naive-ui'

const App = defineComponent({
  name: 'App',
  setup() {
    const isRouterAlive = ref(true)
    /*refresh page when router params change*/
    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }

    provide('reload', reload)

    return {
      reload,
      isRouterAlive
    }
  },
  render() {
    return (
      <NConfigProvider style={{ width: '100%', height: '100vh' }} locale={zhCN}>
        <NMessageProvider>{this.isRouterAlive ? <router-view /> : ''}</NMessageProvider>
      </NConfigProvider>
    )
  }
})

export default App
