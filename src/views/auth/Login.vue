<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<script>
import useLogIn from '@/composables/useLogIn'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const { error, logIn } = useLogIn()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await logIn(email.value, password.value)
      if (!error.value) {
        console.log('User logged in')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>