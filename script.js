let cart = [];
let cartCount = 0;

function addToCart(id, name, price) {
  const product = { id, name, price };
  cart.push(product);
  cartCount++;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartButton = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  
  cartButton.textContent = cartCount;
  
  // Mostrar productos en el carrito
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });
  
  totalPrice.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartPopup = document.getElementById("cart");
  cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
}

function clearCart() {
  cart = [];
  cartCount = 0;
  updateCartDisplay();
  toggleCart();
}
