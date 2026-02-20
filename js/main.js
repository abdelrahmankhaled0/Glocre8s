// document.addEventListener("DOMContentLoaded", function () {
//   // login animation

//   var registerLink = document.querySelector("#registerLink");
//   var loginLink = document.querySelector("#loginLink");
//   var container = document.querySelector(".container");
//   if (registerLink && container) {
//     registerLink.addEventListener("click", function (e) {
//       e.preventDefault();
//       container.classList.add("show-register");
//     });
//   }

//   if (loginLink && container) {
//     loginLink.addEventListener("click", function (e) {
//       e.preventDefault();
//       container.classList.remove("show-register");
//     });
//   }

//   // Auth Logic

//   // Register Logic
//   var registerBtn = document.body.querySelector("#button__register");

//   if (registerBtn) {
//     registerBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       var registrationUsername = document
//         .querySelector("#name__register")
//         .value.trim();
//       var registrationEmail = document
//         .querySelector("#email__register")
//         .value.trim();
//       var registrationPassword = document
//         .querySelector("#password__register")
//         .value.trim();
//       if (
//         registrationUsername === "" ||
//         registrationUsername.length < 3 ||
//         registrationEmail === "" ||
//         !registrationEmail.includes("@") ||
//         registrationPassword === "" ||
//         registrationPassword.length < 8
//       ) {
//         alert("Something is wrong ❌");
//       } else {
//         localStorage.setItem("Username", registrationUsername);
//         localStorage.setItem("Email", registrationEmail);
//         localStorage.setItem("Password", registrationPassword);
//         alert("Registered Successfully ✅");
//         container.classList.remove("show-register");
//       }
//     });
//   }
//   //Login Logic
//   var loginBtn = document.body.querySelector("#button__login");
//   if (loginBtn) {
//     loginBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       var correctUsername = localStorage.getItem("Username");
//       var correctPassword = localStorage.getItem("Password");

//       var username = document.body.querySelector("#name").value;
//       var password = document.body.querySelector("#password").value;

//       if (correctUsername == username && correctPassword == password) {
//         localStorage.setItem("isLoggedIn", "true");
//         window.location.replace("../index.html");
//       } else {
//         alert("Your Username or Password is Wrong ");
//       }
//     });
//   }
//   var nav = document.querySelector(".navBar");
//   if (nav) {
//     if (localStorage.getItem("isLoggedIn") === "true") {
//       nav.classList.add("signInclick-hidden");
//     }
//   }

//   // Cart Logic

//   function renderCart() {
//     var cartPage = document.querySelector(".cart__page");
//     cartPage.innerHTML = "";

//     const products = JSON.parse(localStorage.getItem("cart")) || [];

//     products.forEach((element) => {
//       cartPage.innerHTML += `
//       <div class="cart__page__item">
//         <img src="./images/product${element.id}.png" alt="">
//         <div>
//           <h2>${element.title}</h2>
//           <p>${element.price}</p>
//           <div class="cart__page__item__operator">
//             <i class="fa-solid fa-minus"></i>
//             <p>${element.count}</p>
//             <i class="fa-solid fa-plus"></i>
//           </div>
//         </div>
//       </div>
//     `;
//     });
//   }

//   var cartBtn = document.body.querySelector(".cart__icon");

//   var closingCartBtn = document.body.querySelector(".cart__page__closingIcon");
//   if (cartBtn && closingCartBtn) {
//     cartBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       nav.classList.add("cart-show");
//       renderCart();
//     });
//     closingCartBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       nav.classList.remove("cart-show");
//     });
//   }

//   // Product Logic

//   var productsContainer = document.body.querySelector(".products__container");
//   async function getData() {
//     var res = await fetch("../data.json");
//     if (!res.ok) throw new Error("Failed to fetch products");
//     return res.json();
//   }

//   async function renderProducts() {
//     productsContainer.innerHTML = "";
//     const data = await getData();
//     data.forEach((element) => {
//       if (productsContainer) {
//         productsContainer.innerHTML += `<div
//                     class="bg-[#eaeaea] px-2 mb-5 shadow-2xl rounded-xl  cursor-pointer  lg:px-2 product__item_container"  data-id="${element.id}" data-title="${element.title}"  data-price="${element.price}" data-img="${element.image}"">
//                     <img class=" w-full h-[50%] lg:h-[60%] " src="images/product${element.id}.png " alt="">
//                     <h2 class="text-sm font-bold line-clamp-2 lg:line-clamp-1">${element.title}
//                     </h2>
//                     <p class="font-bold text-[#FF4500]">${element.price}</p>
//                     <button
//                         class="addToCart hover:opacity-[0.8] bg-[#FF4500] cursor-pointer text-white rounded-full p-1 text-[10px] lg:p-3 lg:font-bold lg:mt-2">ADD
//                         TO
//                         CART</button>
//                 </div>`;
//       }
//     });
//   }
//   renderProducts();

//   if (productsContainer) {
//     productsContainer.addEventListener("click", function (e) {
//       if (e.target.classList.contains("addToCart")) {
//         const productItem = e.target.closest(".product__item_container");
//         const product = {
//           id: productItem.dataset.id,
//           image: productItem.dataset.img,
//           title: productItem.dataset.title,
//           price: productItem.dataset.price,
//           count: 1,
//         };

//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const existingProduct = cart.find((item) => item.id === product.id);
//         if (existingProduct) {
//           existingProduct.count += 1;
//         } else {
//           cart.push(product);
//         }
//         localStorage.setItem("cart", JSON.stringify(cart));
//         alert("Product Added Successfully");
//       }
//     });
//   }

//   // Slider

//   slideImages = [
//     "../images/slider.png",
//     "../images/slider2.png",
//     "../images/slider3.png",
//   ];

//   var currentIndex = 0;
//   var slideImage = document.body.querySelector(".slider__image");

//   setInterval(function () {
//     slideImage.src = slideImages[currentIndex];
//     currentIndex++;
//     if (currentIndex === slideImages.length) {
//       currentIndex = 0;
//     }
//   }, 2000);
// });

// main.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const nav = document.querySelector(".navBar");
  const productsContainer = document.querySelector(".products__container");
  const cartBtn = document.querySelector(".cart__icon");
  const closingCartBtn = document.querySelector(".cart__page__closingIcon");
  const cartContent = document.querySelector(".cart__content");

  // LOGIN / REGISTER SWITCH
  const registerLink = document.querySelector("#registerLink");
  const loginLink = document.querySelector("#loginLink");

  registerLink?.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("show-register");
  });

  loginLink?.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("show-register");
  });

  // AUTH LOGIC
  function registerUser() {
    const username = document.querySelector("#name__register").value.trim();
    const email = document.querySelector("#email__register").value.trim();
    const password = document.querySelector("#password__register").value.trim();

    if (
      !username ||
      username.length < 3 ||
      !email.includes("@") ||
      !password ||
      password.length < 8
    ) {
      alert("Please provide valid registration info ❌");
      return;
    }

    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    alert("Registered Successfully ✅");
    container.classList.remove("show-register");
  }

  function loginUser() {
    const username = document.querySelector("#name").value.trim();
    const password = document.querySelector("#password").value.trim();
    const storedUsername = localStorage.getItem("Username");
    const storedPassword = localStorage.getItem("Password");

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.replace("../index.html");
    } else {
      alert("Username or Password is incorrect ❌");
    }
  }

  document
    .querySelector("#button__register")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      registerUser();
    });

  document.querySelector("#button__login")?.addEventListener("click", (e) => {
    e.preventDefault();
    loginUser();
  });

  if (localStorage.getItem("isLoggedIn") === "true") {
    nav?.classList.add("signInclick-hidden");
  }

  // CART LOGIC

  // Open / Close Cart
  cartBtn?.addEventListener("click", () => {
    nav.classList.add("cart-show");
    renderCart();
  });

  closingCartBtn?.addEventListener("click", () => {
    nav.classList.remove("cart-show");
  });

  // Update Cart Counter
  function updateCartCounter() {
    const counter = document.querySelector(".cart__icon div");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    counter.textContent = cart.reduce((sum, item) => sum + item.count, 0);
  }

  // Render Cart
  function renderCart() {
    cartContent.innerHTML = "";
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      cartContent.innerHTML = `<p class="text-center mt-10 text-gray-600">Your cart is empty</p>`;
      updateCartCounter();
      return;
    }

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart__page__item";

      cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart__item__info">
        <h2>${item.title}</h2>
        <p>${item.price}</p>

        <div class="cart__page__item__operator">
          <i class="fa-solid fa-minus"></i>
          <p>${item.count}</p>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>

      <i class="fa-solid fa-trash cart__remove__item"></i>
    `;

      // + / -
      cartItem
        .querySelector(".fa-minus")
        .addEventListener("click", () => adjustCartItem(item.id, -1));

      cartItem
        .querySelector(".fa-plus")
        .addEventListener("click", () => adjustCartItem(item.id, 1));

      // Remove item
      cartItem
        .querySelector(".cart__remove__item")
        .addEventListener("click", () => removeCartItem(item.id));

      cartContent.appendChild(cartItem);
    });

    // Total Price
    const totalPrice = cart.reduce(
      (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.count,
      0,
    );

    const totalDiv = document.createElement("div");
    totalDiv.className = "text-right font-bold mt-4 text-lg";
    totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;

    cartContent.appendChild(totalDiv);
    updateCartCounter();
  }

  // Adjust Quantity
  function adjustCartItem(id, delta) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((i) => i.id == id);
    if (!item) return;

    item.count += delta;
    if (item.count < 1) item.count = 1;

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  // Remove Item Completely
  function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  // Init Counter on Load
  updateCartCounter();

  // PRODUCTS LOGIC

  async function getData() {
    const res = await fetch("../data.json");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  }

  function createProductCard(item) {
    const card = document.createElement("div");
    card.className =
      "bg-[#eaeaea] px-2 mb-5 shadow-2xl rounded-xl cursor-pointer lg:px-2 product__item_container";
    card.dataset.id = item.id;
    card.dataset.title = item.title;
    card.dataset.price = item.price;
    card.dataset.image = item.image;

    card.innerHTML = `
      <img class="w-full h-[50%] lg:h-[60%]" src="${item.image}" alt="${item.title}">
      <h2 class="text-sm font-bold line-clamp-2 lg:line-clamp-1">${item.title}</h2>
      <p class="font-bold text-[#FF4500]">${item.price}</p>
      <button class="addToCart hover:opacity-[0.8] bg-[#FF4500] cursor-pointer text-white rounded-full p-1 lg:p-3 lg:font-bold lg:mt-2">ADD TO CART</button>
    `;

    // Add to Cart button
    const addBtn = card.querySelector(".addToCart");
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find((c) => c.id == item.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        cart.push({ ...item, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      addBtn.textContent = "ADDED";
      addBtn.disabled = true;
      setTimeout(() => {
        addBtn.textContent = "ADD TO CART";
        addBtn.disabled = false;
      }, 1500);
    });

    // Navigate to product details
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("addToCart")) {
        window.location.href = `product-details.html?id=${item.id}`;
      }
    });

    return card;
  }

  async function renderProducts() {
    const data = await getData();
    productsContainer.innerHTML = "";
    data.forEach((item) =>
      productsContainer.appendChild(createProductCard(item)),
    );
  }

  renderProducts();

  // SLIDER
  const slideImages = [
    "../images/slider.png",
    "../images/slider2.png",
    "../images/slider3.png",
  ];
  let currentIndex = 0;
  const slideImage = document.querySelector(".slider__image");

  setInterval(() => {
    slideImage.src = slideImages[currentIndex];
    currentIndex = (currentIndex + 1) % slideImages.length;
  }, 3000);
});
