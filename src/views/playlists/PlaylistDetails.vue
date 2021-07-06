<template>
  
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="document" class="playlist-details">
    <div class="playlist-info">
      <div class="cover">
        <img :src="document.coverUrl" alt="Cover image">
      </div>
      <h2>{{ document.title }}</h2>
      <p class="username">Created by {{ document.userName }}</p>
      <p class="description">{{ document.description }}</p>
    </div>
  </div>
  
</template>

<script>
import getDocument from '@/composables/getDocument'

export default {
  props: ['id'],
  setup(props) {
    const { document, error } = getDocument('playlists', props.id)

    return { document, error }
  }
}
</script>

<style>

</style>