const products = [
  {
    name: "Headphones",
    price: 120,
    discount: 20,
    inStock: true
  },
  {
    name: "Keyboard",
    price: 80,
    discount: 10,
    inStock: false
  },
  {
    name: "Mouse",
    price: 40,
    discount: 5,
    inStock: true
  },
  {
    name: "Monitor",
    price: 300,
    discount: 50,
    inStock: true
  }
];

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  if (product.inStock) {
    const finalPrice = product.price + (product.price * product.discount / 100);
    console.log(product.name + " available.  price: " + finalPrice);
  } else {
    console.log(" not available");
  }
}