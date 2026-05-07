const items = [
  { item: "Linen Overshirt", price: "$79.99" },
  { item: "Prada Puffer Jacket", price: "$149.99" },
  { item: "Valentino Shoes", price: "$89.99" },
  { item: "Casio Watch", price: "$119.99" },
  { item: "Margiela Shirt", price: "$159.99" },
];


const names = document.getElementsByClassName("product-name");
const prices = document.getElementsByClassName("price");
const buttons = document.getElementsByClassName("add-to-cart-btn");

const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");


const cart = [];


for (let i = 0; i < items.length; i++) {
  if (names[i] && prices[i]) {
    names[i].innerHTML = items[i].item;
    prices[i].innerHTML = items[i].price;
  }
}

const renderCart = () => {
  cartItemsContainer.innerHTML = "";

  cart.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `${product.item} - ${product.price}`;
    cartItemsContainer.appendChild(div);
  });
};


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const product = items[i];

    cart.push(product);


    cartCount.innerHTML = cart.length;
    renderCart();

    console.log("Added to cart:", product);
  });
}