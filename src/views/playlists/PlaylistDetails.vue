<template>
  
  <h2>Playlist Details</h2>
  
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