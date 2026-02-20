document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const productImage = document.getElementById("product-image");
  const productTitle = document.getElementById("product-title");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const productQty = document.getElementById("productQty");
  const decreaseQty = document.getElementById("decreaseQty");
  const increaseQty = document.getElementById("increaseQty");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const cartCounter = document.querySelector(".cart__icon div");

  // Fetch product data
  const res = await fetch("data.json");
  const products = await res.json();
  const product = products.find((p) => p.id == productId);

  if (!product) {
    alert("Product not found");
    return;
  }

  productImage.src = product.image;
  productTitle.textContent = product.title;
  productPrice.textContent = product.price;
  productDescription.textContent =
    "This is a high-quality handmade product perfect for your daily use. Crafted with care and attention to detail.";

  let qty = 1;

  increaseQty.addEventListener("click", () => {
    qty++;
    productQty.textContent = qty;
  });

  decreaseQty.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      productQty.textContent = qty;
    }
  });

  addToCartBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((c) => c.id == product.id);
    if (existingItem) {
      existingItem.count += qty;
    } else {
      cart.push({ ...product, count: qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCounter.textContent = cart.reduce((sum, item) => sum + item.count, 0);
    addToCartBtn.textContent = "ADDED";
    addToCartBtn.disabled = true;
    setTimeout(() => {
      addToCartBtn.textContent = "Add To Cart";
      addToCartBtn.disabled = false;
    }, 1500);
  });
});
