import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDcsHGXGxbUlEL1H4ZLxUaEAB0NI4TWTiI",
  authDomain: "musinity-1e616.firebaseapp.com",
  projectId: "musinity-1e616",
  storageBucket: "musinity-1e616.appspot.com",
  messagingSenderId: "212506624199",
  appId: "1:212506624199:web:78ec1387ec11c9e2387ee2"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }