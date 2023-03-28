import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, where, orderBy, deleteDoc, doc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCf6SEqc3ISTNCg0SL9MSb2kqoFl2pymf4",
    authDomain: "finance-tracker-f0b78.firebaseapp.com",
    projectId: "finance-tracker-f0b78",
    storageBucket: "finance-tracker-f0b78.appspot.com",
    messagingSenderId: "165508668607",
    appId: "1:165508668607:web:b03b3e08bf8f2bfe963a0a"
  };

  //init firebase
    initializeApp(firebaseConfig)

  //init services
  const db = getFirestore()
  const auth = getAuth()

  //timestamp
  const timestamp = serverTimestamp();

  export { db, auth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, onAuthStateChanged, collection, addDoc, timestamp, onSnapshot, query, where, orderBy, deleteDoc, doc }