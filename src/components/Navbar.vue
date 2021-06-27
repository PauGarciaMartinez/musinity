<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="Logo">
      <h1><router-link :to="{ name: 'Home' }">Musinity</router-link></h1>
      <div class="links">
        <button>Log Out</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Sign Up</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Log In</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>