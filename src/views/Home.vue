<template>

  <div class="home">
    <div v-if="error">Could not fetch the data</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>

</template>

<script>
import ListView from '@/components/ListView'
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  components: {
    ListView
  },
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
}
</script>
