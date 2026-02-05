let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart(){
  const box = document.getElementById("cartItems");
  const totalBox = document.getElementById("cartTotal");
  box.innerHTML = "";
  let total = 0;

  cart.forEach(i=>{
    box.innerHTML += `<div>${i.name} × ${i.qty} = ${i.price*i.qty} บาท</div>`;
    total += i.price*i.qty;
  });

  totalBox.innerText = total;
}

window.addToCart = function(item){
  const found = cart.find(i=>i.id===item.id);
  if(found) found.qty++;
  else cart.push({...item, qty:1});
  saveCart();
  renderCart();
}

window.clearCart = function(){
  if(confirm("ล้างตะกร้าทั้งหมด?")){
    cart = [];
    saveCart();
    renderCart();
  }
}

renderCart();