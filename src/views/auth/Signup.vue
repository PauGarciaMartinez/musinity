<template>

  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useSignUp from '@/composables/useSignUp'

export default {
  setup() {
    const { error, signUp, isPending } = useSignUp()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    const handleSubmit = async () => {
      const res = await signUp(email.value, password.value, displayName.value)
      if (!error.value) {
        router.push({ name: 'UserPlaylists' })
      }
    }

    return { email, password, displayName, error, handleSubmit, isPending }
  }
}
</script>

<style>

</style>