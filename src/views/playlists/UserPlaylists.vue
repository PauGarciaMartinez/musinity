<template>
  
  <div class="user-playlist">
    <h2>My Playlists</h2>
  </div>
  
</template>

<script>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'

export default {
  setup() {
    const { user } = getUser()
    const { document: playlists } = getCollection(
      'playlists', 
      ['userId', '==', user.value.uid]
    )

    return { playlists }
  }
}
</script>

<style>

</style>