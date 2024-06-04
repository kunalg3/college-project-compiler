import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// import {getFirestore} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

   const firebaseConfig = {
    apiKey: "AIzaSyBqlrJkflCK1PpJMxZf2Tk5_100FL7CcAA",
    authDomain: "compiler-project-auth.firebaseapp.com",
    projectId: "compiler-project-auth",
    storageBucket: "compiler-project-auth.appspot.com",
    messagingSenderId: "1080621152962",
    appId: "1:1080621152962:web:12c93496caba63d9c4195b"
  }; 

  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth();
  export const db = getFirestore(app);
  export default app;