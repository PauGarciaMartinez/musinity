<template>
  
  <div v-for="playlist in playlists" :key="playlist.id">
    <div class="single">
      <div class="thumbnail">
        <img :src="playlist.coverUrl" alt="Playlist image">
      </div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>