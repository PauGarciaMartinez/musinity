<template>
  
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" placeholder="Playlist title" v-model="title" required>
    <textarea placeholder="Playlist description..." v-model="description" required></textarea>
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange">
    <div class="error">{{ fileError }}</div>

    <div class="error" v-if="error">{{ error.value }}</div>
    <button>Create</button>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'

export default {
  setup() {
    const { filePath, url, error, uploadImage } = useStorage()
    const { error, addDoc } = useCollection('playlists')
    const { user } = getUser()

    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const types = ['image/png', 'image/jpeg']

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value)
        await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp()
        })
      }
    }

    const handleChange = (e) => {
      const selected = e.target.files[0]
      console.log(selected)

      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please select an image file (png or jpeg)'
      }
    }

    return { title, description, handleSubmit, handleChange, fileError, error }
  }
}
</script>

<style scoped>
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>