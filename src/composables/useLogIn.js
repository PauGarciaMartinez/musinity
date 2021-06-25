import { is } from "core-js/fn/object"
import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)
const isPending = ref(false)

const logIn = async (email, password) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    isPending.value = false
    return res
    
  } catch(err) {
    console.log(err.value)
    error.value = 'Incorrect log in credentials'
    isPending.value = false
  }
}

const useLogIn = () => {
  return { error, logIn, isPending }
}

export default useLogIn