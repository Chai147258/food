import { db } from "./app.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadMenu(){
  const foodQ = query(collection(db, "menus"), where("type","==","food"));
  const drinkQ = query(collection(db, "menus"), where("type","==","drink"));

  const foodSnap = await getDocs(foodQ);
  const drinkSnap = await getDocs(drinkQ);

  const foodBox = document.getElementById("foodMenu");
  const drinkBox = document.getElementById("drinkMenu");

  foodBox.innerHTML = "";
  drinkBox.innerHTML = "";

  foodSnap.forEach(doc=>{
    const m = doc.data();
    foodBox.innerHTML += `
      <div class="item">
        <img src="${m.image}">
        <div class="info">
          <h4>${m.name_th}</h4>
          <p>${m.price} บาท</p>
          <button class="order-btn"
            onclick='addToCart({
              id:"${doc.id}",
              name:"${m.name_th}",
              price:${m.price}
            })'>
            ใส่ตะกร้า
          </button>
        </div>
      </div>
    `;
  });

  drinkSnap.forEach(doc=>{
    const m = doc.data();
    drinkBox.innerHTML += `
      <div class="item">
        <img src="${m.image}">
        <div class="info">
          <h4>${m.name_th}</h4>
          <p>${m.price} บาท</p>
          <button class="order-btn"
            onclick='addToCart({
              id:"${doc.id}",
              name:"${m.name_th}",
              price:${m.price}
            })'>
            ใส่ตะกร้า
          </button>
        </div>
      </div>
    `;
  });
}

loadMenu();