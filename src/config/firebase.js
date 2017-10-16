import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCwvsTxAMi3asTMS_ARZ3RliDeTujJbZ-0",
  authDomain: "notevuek-b1741.firebaseapp.com",
  databaseURL: "https://notevuek-b1741.firebaseio.com",
  projectId: "notevuek-b1741",
  storageBucket: "notevuek-b1741.appspot.com",
  messagingSenderId: "1039470534145"
}

const app = Firebase.initializeApp(config)
const db = app.database()
const notesRef = db.ref('notes')

export default { app, db, notesRef }