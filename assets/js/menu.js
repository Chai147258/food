import { db } from "./app.js";
import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadMenu(type, targetId){
  const q = query(collection(db, "menus"), where("type", "==", type));
  const snapshot = await getDocs(q);
  const box = document.getElementById(targetId);

  box.innerHTML = "";

  snapshot.forEach(doc=>{
    const m = doc.data();
    box.innerHTML += `
      <div class="item">
        <img src="${m.image}">
        <div class="info">
          <h4>${m.name_th}</h4>
          <p>฿${m.price}</p>
          <a class="order-btn" href="https://lin.ee/P7ziHYL">สั่งเมนูนี้</a>
        </div>
      </div>
    `;
  });
}

loadMenu("food","foodMenu");
loadMenu("drink","drinkMenu");