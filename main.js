//  Open & Close Cart

var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

// this is chatgpt code 



let cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  renderCart();
  open_cart();
}

function renderCart() {
  const cartContainer = document.querySelector(".item_in_cart");
  cartContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div class="item_cart">
        <img src="${item.img}" alt="${item.name}">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_cart">&#8360; ${item.price}</p>
        </div>
        <button class="delete_item" onclick="removeFromCart(${index})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  document.querySelector(".top_cart span").textContent = `(${cartItems.length} Item${cartItems.length !== 1 ? 's' : ''} in Cart)`;
  document.querySelector(".count_item").textContent = cartItems.length;

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  document.querySelector(".price_cart_total").textContent = `&#8360; ${total}`;
  document.querySelector(".price_cart_Head").textContent = `&#8360; ${total}`;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCart();
}
