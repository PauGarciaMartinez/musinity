<template>

  <form @submit.prevent="handleSubmit">
    <h3>Log In</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log In</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
  
</template>

<script>
import useLogIn from '@/composables/useLogIn'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, logIn, isPending } = useLogIn()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await logIn(email.value, password.value)
      if (!error.value) {
        router.push({ name: 'UserPlaylists' })
      }
    }

    return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>