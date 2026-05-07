import { items } from "./project1.js";

const names = document.getElementsByClassName("product-name");
const prices = document.getElementsByClassName("price");

for (let i = 0; i < items.length; i++) {
  names[i].innerHTML = items[i].item;
  prices[i].innerHTML = items[i].price;
}
const buttons = document.querySelectorAll(".add-to-cart-btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log(`Adding to cart: ${items[index].item}`);
  });
});