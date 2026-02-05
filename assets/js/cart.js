let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart(){
  const box = document.getElementById("cartItems");
  const totalBox = document.getElementById("cartTotal");
  if(!box || !totalBox) return;

  box.innerHTML = "";
  let total = 0;

  cart.forEach(i=>{
    total += i.price * i.qty;
    box.innerHTML += `
      <div style="display:flex;justify-content:space-between">
        <span>${i.name} x ${i.qty}</span>
        <span>${i.price * i.qty}</span>
      </div>
    `;
  });

  totalBox.textContent = total;
}

window.addToCart = function(item){
  const found = cart.find(i=>i.id === item.id);
  if(found){
    found.qty++;
  }else{
    cart.push({...item, qty:1});
  }
  saveCart();
  renderCart();
}

window.clearCart = function(){
  cart = [];
  saveCart();
  renderCart();
}

renderCart();