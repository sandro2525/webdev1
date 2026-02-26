const cart = {
  user: "Ana",
  items: ["Headphones", "Mouse", "Keyboard"],
  prices: [120, 40, 80],  
};

let total = 0;

for (let i = 0; i < cart.items.length; i++) {
  console.log(cart.user + " is buying " + cart.items[i]);
  total = total + cart.prices[i];
}
console.log("total price is " + total);
