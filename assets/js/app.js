import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxJ7kTwUKR3n8Xosi_aqFqdPJmlKngS0I",
  authDomain: "lungchai-food.firebaseapp.com",
  projectId: "lungchai-food",
  storageBucket: "lungchai-food.firebasestorage.app",
  messagingSenderId: "138015745718",
  appId: "1:138015745718:web:5a2065e3ca2c7b638b2817"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("🔥 Firebase connected");