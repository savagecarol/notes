import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWdCBN5A37o29HZ0-bjeDTUqNTct5BGug",
    authDomain: "notes-d1860.firebaseapp.com",
    projectId: "notes-d1860",
    storageBucket: "notes-d1860.appspot.com",
    messagingSenderId: "141253409179",
    appId: "1:141253409179:web:3b91bbc9937f81a2dec93e",
    measurementId: "G-XT7YGP6H83"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  