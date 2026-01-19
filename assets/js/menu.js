<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxJ7kTwUKR3n8Xosi_aqFqdPJmlKngS0I",
  authDomain: "lungchai-food.firebaseapp.com",
  projectId: "lungchai-food",
  storageBucket: "lungchai-food.firebasestorage.app",
  messagingSenderId: "138015745718",
  appId: "1:138015745718:web:5a2065e3ca2c7b638b2817"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadMenu() {
  const querySnapshot = await getDocs(collection(db, "menus"));
  const menuDiv = document.getElementById("menu");

  menuDiv.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const item = doc.data();

    menuDiv.innerHTML += `
      <div class="menu-item">
        <img src="${item.image}" alt="${item.name_th}">
        <h3>${item.name_th}</h3>
        <p>฿${item.price}</p>
        <a href="https://lin.ee/P7ziHYL" class="order-btn">สั่งอาหาร</a>
      </div>
    `;
  });
}

loadMenu();
</script>