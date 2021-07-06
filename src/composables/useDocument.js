import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const useDocument = (collection, id) => {
  let error = ref(null)
  let isPending = ref(null)

  return { error, isPending }
}

export default useDocument