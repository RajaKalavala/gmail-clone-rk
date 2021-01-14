import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAieMKzidZBEoyOlEh0qpohP1pEbiqdgP4",
  authDomain: "clone-rk.firebaseapp.com",
  projectId: "clone-rk",
  storageBucket: "clone-rk.appspot.com",
  messagingSenderId: "127970562977",
  appId: "1:127970562977:web:794e7ced45db5a4e54b1e0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
