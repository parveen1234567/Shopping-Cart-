let cart = [];
let total = 0;

function addToCart(item, price) {
  const existing = cart.find(p => p.item === item);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ item, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  total = 0;

  cart.forEach((product, index) => {
    total += product.price * product.quantity;
    cartList.innerHTML += `
      <li>
        ${product.item} - ₹${product.price} × ${product.quantity}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = `Total: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
