import firebase from 'firebase'
import 'firebase/database'
import Rebase from 're-base'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB64VtlZtlZ6hnBJjeIsqwxbQ37ZQtoEjw",
    authDomain: "noteherder-e45cc.firebaseapp.com",
    databaseURL: "https://noteherder-e45cc.firebaseio.com",
    projectId: "noteherder-e45cc",
    storageBucket: "noteherder-e45cc.appspot.com",
    messagingSenderId: "18520987602"
  }
  const app = firebase.initializeApp(config)
 export default Rebase.createClass(app.database())