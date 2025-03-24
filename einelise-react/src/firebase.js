import {initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAjizi-OdEDxy2ig1YKk0oOxqp9-tzzO54",
    authDomain: "einelise-user-database.firebaseapp.com",
    projectId: "einelise-user-database",
    storageBucket: "einelise-user-database.firebasestorage.app",
    messagingSenderId: "718483786154",
    appId: "1:718483786154:web:e6f9f84150f6c28c3fc3d3",
    measurementId: "G-PJRD1ESLNS"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
