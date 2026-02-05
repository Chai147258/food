import {
  collection,
  getDocs,
  query,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// จุดแสดงผล (ต้องมีใน index.html)
const foodMenu = document.getElementById("foodMenu");
const drinkMenu = document.getElementById("drinkMenu");

async function loadMenu() {
  // ดึงเฉพาะเมนูที่เปิดขาย
  const q = query(
    collection(window.db, "menus"),
    where("available", "==", true),
    orderBy("order")
  );

  const querySnapshot = await getDocs(q);

  foodMenu.innerHTML = "";
  drinkMenu.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const item = doc.data();

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name_th}">
      <div class="info">
        <h4>${item.name_th}</h4>
        <p>${item.price} บาท</p>
        <a href="#" onclick="addToCart('${doc.id}')">เพิ่มลงตะกร้า</a>
      </div>
    `;

    // แยกหมวด
    if (item.category === "อาหาร") {
      foodMenu.appendChild(div);
    } 
    else if (item.category === "เครื่องดื่ม") {
      drinkMenu.appendChild(div);
    }
  });
}

// เรียกใช้งาน
loadMenu();