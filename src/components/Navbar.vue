<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="Logo">
      <h1><router-link :to="{ name: 'Home' }">Musinity</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }"></router-link>
          <button @click="handleClick">Log Out</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Sign Up</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Log In</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import getUser from '@/composables/getUser'
import useLogOut from '@/composables/useLogOut'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, logOut } = useLogOut()
    const { user } = getUser() 
    const router = useRouter()

    const handleClick = async () => {
      await logOut()
      if (!error.value) {
        console.log('User logged out')
      }
      router.push({ name: 'Login' })
    }

    return { error, logOut, handleClick, user }
  }
}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
</style>