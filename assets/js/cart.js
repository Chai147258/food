let cart = [];

function addToCart(item){
  cart.push(item);
  renderCart();
}

function renderCart(){
  const box = document.getElementById("cartItems");
  const totalBox = document.getElementById("cartTotal");
  box.innerHTML = "";
  let total = 0;

  cart.forEach(i=>{
    box.innerHTML += `<div>${i.name} - ${i.price} บาท</div>`;
    total += i.price;
  });

  totalBox.innerText = total;
}

function clearCart(){
  cart = [];
  renderCart();
}