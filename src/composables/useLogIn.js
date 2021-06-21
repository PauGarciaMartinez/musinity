import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logIn = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    
  } catch(err) {
    console.log(err.value)
    error.value = 'Incorrect log in credentials'
  }
}

const useLogIn = () => {
  return { error, logIn }
}

export default useLogIn