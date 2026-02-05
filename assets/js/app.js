// Import Firebase SDK (CDN ใช้กับ GitHub Pages ได้)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config ของร้านลุงชัย
const firebaseConfig = {
  apiKey: "AIzaSyBxJ7kTwUKR3n8Xosi_aqFqdPJmlKngS0I",
  authDomain: "lungchai-food.firebaseapp.com",
  projectId: "lungchai-food",
  storageBucket: "lungchai-food.firebasestorage.app",
  messagingSenderId: "138015745718",
  appId: "1:138015745718:web:5a2065e3ca2c7b638b2817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// ⭐ สำคัญมาก: เปิดให้ไฟล์อื่นเรียกใช้ได้
window.db = db;

console.log("🔥 Firebase connected successfully");