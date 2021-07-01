<template>
  <div class="home">
    <p>Homepage</p>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  setup() {
    const { documents, error } = getCollection('playlists')
  }
}
</script>
