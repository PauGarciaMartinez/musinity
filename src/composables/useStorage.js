import { ref } from 'vue'
import { projectStorage } from '../firebase/config'

const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  return { url, filePath, error }
}

export default useStorage