import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDMWv4GlVgRxyP71D4gfe4gUN9qGwRPjMs",
  authDomain: "dogmal.firebaseapp.com",
  databaseURL: "https://dogmal.firebaseio.com",
  projectId: "dogmal",
  storageBucket: "dogmal.appspot.com",
  messagingSenderId: "760632975559",
  appId: "1:760632975559:web:92546edfc82a09d0829ee2",
  measurementId: "G-LYV731B2S2"
}

export default firebase.initializeApp(firebaseConfig)
// firebase.analytics()