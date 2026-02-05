const menus = [
  {
    id:1,
    name:"ข้าวกะเพรา",
    price:50,
    img:"https://images.unsplash.com/photo-1604908554164-7a5c59f2d82d"
  },
  {
    id:2,
    name:"ชาเย็น",
    price:30,
    img:"https://images.unsplash.com/photo-1542444459-db63c79be30c"
  }
];

const menuBox = document.getElementById("menu");

menus.forEach(item=>{
  menuBox.innerHTML += `
    <div class="item">
      <img src="${item.img}">
      <div class="info">
        <h4>${item.name}</h4>
        <p>${item.price} บาท</p>
        <button class="order-btn" onclick='addToCart(${JSON.stringify(item)})'>
          ใส่ตะกร้า
        </button>
      </div>
    </div>
  `;
});