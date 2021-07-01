<template>

  <div class="home">
    <p>Homepage</p>
    <div v-if="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">
        <h1>{{ doc.title }}</h1>
      </div>
    </div>
    
  </div>

</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
}
</script>
