const items = [
  { item: "Linen Overshirt", price: "$79.99" },
  { item: "prada puffer jacket", price: "$149.99" },
  { item: "valentino shoes", price: "$89.99" },
  { item: "casio watch", price: "$119.99" },
  { item: "margiela shirt", price: "$159.99" },
];

const names = document.getElementsByClassName("product-name");
const prices = document.getElementsByClassName("price");

for (let i = 0; i < items.length; i++) {
  names[i].innerHTML = items[i].item;
  prices[i].innerHTML = items[i].price;
}