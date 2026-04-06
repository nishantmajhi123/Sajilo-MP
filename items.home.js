

fetch('js/items.json')
  .then(response => response.json())
  .then(data => {
    const swiper_items_sale = document.getElementById("swiper_items_sale");

    data.forEach(product => {
      if (product.old_price) {
        swiper_items_sale.innerHTML += `
          <div class="product swiper-slide">
            <div class="icons">
              <span onclick='addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})'>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>

            <span class="sale_present">%10</span>

            <div class="img_product">
              <img src="${product.img}" alt="${product.name}">
              <img class="img_hover" src="${product.hoverImg}" alt="">
            </div>

            <h3 class="name_product"><a href="#">${product.name}</a></h3>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
              <p><span>&#8360;.${product.price}</span></p>
              <p class="old_price">&#8360;.${product.old_price}</p>
            </div>
          </div>
        `;
      }
    });
  });
