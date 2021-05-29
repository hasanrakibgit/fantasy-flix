import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXhQkeTwibdQGCt3L0M7ERBB5eCLmOfsU",
    authDomain: "fantasy-flix-2026d.firebaseapp.com",
    projectId: "fantasy-flix-2026d",
    storageBucket: "fantasy-flix-2026d.appspot.com",
    messagingSenderId: "421948400076",
    appId: "1:421948400076:web:e882c2a14725f824c77d69",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
