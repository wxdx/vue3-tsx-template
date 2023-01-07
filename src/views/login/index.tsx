import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/user/user'
export default defineComponent({
  name: 'UserLogin',
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  },
  render() {
    return <div>Login: {this.userStore.sessionId}</div>
  }
})
