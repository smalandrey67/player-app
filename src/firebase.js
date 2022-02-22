import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5ZUgGEsuJEvcZQ1dVA9Xa-8K_V5svDMM",
  authDomain: "player-app-fdf1e.firebaseapp.com",
  projectId: "player-app-fdf1e",
  storageBucket: "player-app-fdf1e.appspot.com",
  messagingSenderId: "834709978552",
  appId: "1:834709978552:web:0b44434298118e5d40a34d" 
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const userCollectionRef = collection(db, 'songs')




export { userCollectionRef, db }


