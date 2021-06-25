<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">Musinity</router-link></h1>
    </nav>
    <div class="links">
      <button>Log Out</button>
      <router-link class="btn" :to="{ name: 'Signup' }">Sign Up</router-link>
      <router-link class="btn" :to="{ name: 'Login' }">Log In</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>