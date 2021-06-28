<template>
  
  <form>
    <h4>Create New Playlist</h4>
    <input type="text" placeholder="Playlist title" v-model="title" required>
    <textarea placeholder="Playlist description..." v-model="description" required></textarea>
    <label>Upload playlist cover image</label>
    <input type="file">
    <button>Create</button>
  </form>

</template>

<script>
export default {

}
</script>

<style>

</style>